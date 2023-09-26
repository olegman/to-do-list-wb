import { createSelector } from 'reselect';
import { TTodosState } from './types';
import { initialState } from './reducer';
import { TODOS_REDUCER_NAME } from './constants';

const todosStorage = (store: TTodosState) =>
  store[TODOS_REDUCER_NAME] || initialState;

export const todosSelector = createSelector(
  [todosStorage],
  ({ todos }: TTodosState) => todos,
);
