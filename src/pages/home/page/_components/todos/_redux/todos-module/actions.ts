import {
  IReduxAction,
  IReduxBaseAction,
} from '@mihanizm56/redux-core-modules/dist/types';
import { TPayloadTodos } from './types';

const SET_TODOS_ACTION = 'SET_TODOS_ACTION';
export const setTodosAction: IReduxAction<
  TPayloadTodos,
  typeof SET_TODOS_ACTION
> = (payload) => ({
  type: SET_TODOS_ACTION,
  payload,
});
setTodosAction.type = SET_TODOS_ACTION;

const START_LOADING_TODOS_ACTION = 'START_LOADING_TODOS_ACTION';
export const startLoadingTodosAction: IReduxBaseAction<
  typeof START_LOADING_TODOS_ACTION
> = () => ({
  type: START_LOADING_TODOS_ACTION,
});
startLoadingTodosAction.type = START_LOADING_TODOS_ACTION;

const STOP_LOADING_TODOS_ACTION = 'STOP_LOADING_TODOS_ACTION';
export const stopLoadingTodosAction: IReduxBaseAction<
  typeof STOP_LOADING_TODOS_ACTION
> = () => ({
  type: STOP_LOADING_TODOS_ACTION,
});
stopLoadingTodosAction.type = STOP_LOADING_TODOS_ACTION;

const START_ADD_TODO_LOADING_ACTION = 'START_ADD_TODO_LOADING_ACTION';
export const startAddTodoLoadingAction: IReduxBaseAction<
  typeof START_ADD_TODO_LOADING_ACTION
> = () => ({
  type: START_ADD_TODO_LOADING_ACTION,
});
startAddTodoLoadingAction.type = START_ADD_TODO_LOADING_ACTION;

const STOP_ADD_TODO_LOADING_ACTION = 'STOP_ADD_TODO_LOADING_ACTION';
export const stopAddTodoLoadingAction: IReduxBaseAction<
  typeof STOP_ADD_TODO_LOADING_ACTION
> = () => ({
  type: STOP_ADD_TODO_LOADING_ACTION,
});
stopAddTodoLoadingAction.type = STOP_ADD_TODO_LOADING_ACTION;

const SET_EDIT_TODO_ID_LOADING = 'SET_EDIT_TODO_ID_LOADING';
export const setEditTodoIdLoadingAction: IReduxAction<
  number | null,
  typeof SET_EDIT_TODO_ID_LOADING
> = (payload) => ({
  type: SET_EDIT_TODO_ID_LOADING,
  payload,
});
setEditTodoIdLoadingAction.type = SET_EDIT_TODO_ID_LOADING;
