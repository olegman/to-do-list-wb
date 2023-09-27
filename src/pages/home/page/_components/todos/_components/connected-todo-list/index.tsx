import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { addTodoRequest } from '@/api/requests/add-todo';
import { removeTodoRequest } from '@/api/requests/remove-todo';
import { editTodoRequest } from '@/api/requests/edit-todo';
import { changeCheckTodoRequest } from '@/api/requests/change-check-todo';
import {
  isAddTodoLoadingSelector,
  todosSelector,
  editTodoIdLoadingSelector,
} from '../../_redux/todos-module/selectors';
import { TPayloadTodos, TTodosState } from '../../_redux/todos-module/types';
import { TTodo } from '../../types';
import {
  setEditTodoIdLoadingAction,
  setTodosAction,
  startAddTodoLoadingAction,
  stopAddTodoLoadingAction,
} from '../../_redux/todos-module/actions';
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
          requestConfigList: [
            {
              request: removeTodoRequest,
              requestOptions: {
                id,
              },
              callBackOnSuccess,
              loadingStartAction: () => setEditTodoIdLoadingAction(id),
              loadingStopAction: () => setEditTodoIdLoadingAction(null),
            },
          ],
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
          requestConfigList: [
            {
              request: editTodoRequest,
              requestOptions: {
                name,
                description,
                id,
              },
              callBackOnSuccess,
              loadingStartAction: () => setEditTodoIdLoadingAction(id),
              loadingStopAction: () => setEditTodoIdLoadingAction(null),
            },
          ],
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
          requestConfigList: [
            {
              request: changeCheckTodoRequest,
              requestOptions: {
                check,
                id,
              },
              callBackOnSuccess,
              loadingStartAction: () => setEditTodoIdLoadingAction(id),
              loadingStopAction: () => setEditTodoIdLoadingAction(null),
            },
          ],
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
          requestConfigList: [
            {
              request: addTodoRequest,
              requestOptions: {
                name,
                description,
              },
              callBackOnSuccess,
              loadingStartAction: startAddTodoLoadingAction,
              loadingStopAction: stopAddTodoLoadingAction,
            },
          ],
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
