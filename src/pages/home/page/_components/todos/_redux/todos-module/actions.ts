import { IReduxAction } from '@mihanizm56/redux-core-modules/dist/types';
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
