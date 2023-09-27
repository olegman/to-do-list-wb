import { TTodo } from '../../types';

export type TTodosState = {
  todos: Array<TTodo>;
  isLoading: boolean;
  isAddTodoLoading: boolean;
  editTodoIdLoading: number | null;
};

export type TPayloadTodos = {
  todos: Array<TTodo>;
};
