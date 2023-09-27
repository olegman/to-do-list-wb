import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { removeTodoConfig } from '@/pages/home/page/_components/todos/_components/connected-todo-list/_utils/remove-todo-request-config';
import { editTodoConfig } from '@/pages/home/page/_components/todos/_components/connected-todo-list/_utils/edit-todo-request-config';
import { changeCheckTodoConfig } from '@/pages/home/page/_components/todos/_components/connected-todo-list/_utils/change-check-todo-request-config';
import { addTodoConfig } from '@/pages/home/page/_components/todos/_components/connected-todo-list/_utils/add-todo-request-config';
import {
  isAddTodoLoadingSelector,
  todosSelector,
  editTodoIdLoadingSelector,
} from '../../_redux/todos-module/selectors';
import { TPayloadTodos, TTodosState } from '../../_redux/todos-module/types';
import { TTodo } from '../../types';
import { setTodosAction } from '../../_redux/todos-module/actions';
import { TodoList } from './_components/todo-list';

type TProps = TMapStateToProps & TMapDispatchToProps;

type TMapStateToProps = {
  todos: Array<TTodo>;
  isAddTodoLoading: boolean;
  editTodoIdLoading: number | null;
};

type TMapDispatchToProps = {
  setTodos: typeof setTodosAction;
  initLoadManager: typeof initLoadManagerActionSaga;
};

const WrappedContainer = memo(
  ({
    todos,
    setTodos,
    initLoadManager,
    isAddTodoLoading,
    editTodoIdLoading,
  }: TProps) => {
    const handleRemoveTodo = useCallback(
      (id: number) => {
        const callBackOnSuccess = () => {
          setTodos({
            todos: todos.filter(({ id: todoId }) => todoId !== id),
          });
        };

        initLoadManager({
          requestConfigList: removeTodoConfig({ id, callBackOnSuccess }),
        });
      },
      [todos, setTodos, initLoadManager],
    );

    const handleEditTodo = useCallback(
      (name: string, description: string, id: number) => {
        const callBackOnSuccess = () => {
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
        };

        initLoadManager({
          requestConfigList: editTodoConfig({
            name,
            description,
            id,
            callBackOnSuccess,
          }),
        });
      },
      [todos, setTodos, initLoadManager],
    );

    const handleChangeCheckTodo = useCallback(
      (check: boolean, id: number) => {
        const callBackOnSuccess = () => {
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
        };

        initLoadManager({
          requestConfigList: changeCheckTodoConfig({
            check,
            id,
            callBackOnSuccess,
          }),
        });
      },
      [todos, setTodos, initLoadManager],
    );

    const handleAddTodo = useCallback(
      (name: string, description: string) => {
        const callBackOnSuccess = (params: { responseData: TPayloadTodos }) => {
          setTodos(params.responseData);
        };

        initLoadManager({
          requestConfigList: addTodoConfig({
            name,
            description,
            callBackOnSuccess,
          }),
        });
      },
      [setTodos, initLoadManager],
    );

    return (
      <TodoList
        editTodoIdLoading={editTodoIdLoading}
        isAddTodoLoading={isAddTodoLoading}
        onAddTodo={handleAddTodo}
        onChangeCheckTodo={handleChangeCheckTodo}
        onEditTodo={handleEditTodo}
        onRemoveTodo={handleRemoveTodo}
        todos={todos}
      />
    );
  },
);

const mapStateToProps = (state: TTodosState): TMapStateToProps => ({
  todos: todosSelector(state),
  isAddTodoLoading: isAddTodoLoadingSelector(state),
  editTodoIdLoading: editTodoIdLoadingSelector(state),
});

const mapDispatchToProps: TMapDispatchToProps = {
  setTodos: setTodosAction,
  initLoadManager: initLoadManagerActionSaga,
};

export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
