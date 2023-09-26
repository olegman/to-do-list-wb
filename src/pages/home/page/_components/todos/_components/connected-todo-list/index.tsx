import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { todosSelector } from '../../_redux/todos-module/selectors';
import { TTodosState } from '../../_redux/todos-module/types';
import { TTodo } from '../../types';
import { setTodosAction } from '../../_redux/todos-module/actions';
import { TodoList } from './_components/todo-list';

type TProps = TMapStateToProps & TMapDispatchToProps;

type TMapStateToProps = {
  todos: Array<TTodo>;
};

type TMapDispatchToProps = {
  setTodos: typeof setTodosAction;
};

const WrappedContainer = memo(({ todos, setTodos }: TProps) => {
  const handleRemoveTodo = useCallback(
    (id: number) => {
      setTodos({
        todos: todos.filter(({ id: todoId }) => todoId !== id),
      });
    },
    [todos, setTodos],
  );

  const handleEditTodo = useCallback(
    (name: string, description: string, id: number) => {
      setTodos({
        todos: todos.map((todo) => {
          return todo.id === id
            ? {
                ...todo,
                name,
                description,
              }
            : todo;
        }),
      });
    },
    [todos, setTodos],
  );

  const handleChangeCheckTodo = useCallback(
    (check: boolean, id: number) => {
      setTodos({
        todos: todos.map((todo) => {
          return todo.id === id
            ? {
                ...todo,
                check,
              }
            : todo;
        }),
      });
    },
    [todos, setTodos],
  );

  const handleAddTodo = useCallback(
    (name: string, description: string) => {
      setTodos({
        todos: [
          ...todos,
          {
            id: todos.at(-1) ? todos.at(-1).id + 1 : 1,
            name,
            description,
            date: new Date().toISOString(),
            check: false,
          },
        ],
      });
    },
    [todos, setTodos],
  );

  return (
    <TodoList
      onAddTodo={handleAddTodo}
      onChangeCheckTodo={handleChangeCheckTodo}
      onEditTodo={handleEditTodo}
      onRemoveTodo={handleRemoveTodo}
      todos={todos}
    />
  );
});

const mapStateToProps = (state: TTodosState): TMapStateToProps => ({
  todos: todosSelector(state),
});

const mapDispatchToProps: TMapDispatchToProps = {
  setTodos: setTodosAction,
};

export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
