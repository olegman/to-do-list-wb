import { TTodosState } from './types';
import {
  setTodosAction,
  startAddTodoLoadingAction,
  startLoadingTodosAction,
  stopAddTodoLoadingAction,
  stopLoadingTodosAction,
  setEditTodoIdLoadingAction,
} from './actions';

type TActions =
  | ReturnType<typeof setTodosAction>
  | ReturnType<typeof startLoadingTodosAction>
  | ReturnType<typeof stopLoadingTodosAction>
  | ReturnType<typeof startAddTodoLoadingAction>
  | ReturnType<typeof stopAddTodoLoadingAction>
  | ReturnType<typeof setEditTodoIdLoadingAction>;

export const initialState: TTodosState = {
  todos: [],
  isLoading: false,
  isAddTodoLoading: false,
  editTodoIdLoading: null,
};

const reducer = (state: TTodosState = initialState, action: TActions) => {
  switch (action.type) {
    case setTodosAction.type:
      return { ...state, todos: action.payload.todos };
    case startLoadingTodosAction.type:
      return { ...state, isLoading: true };
    case stopLoadingTodosAction.type:
      return { ...state, isLoading: false };
    case startAddTodoLoadingAction.type:
      return { ...state, isAddTodoLoading: true };
    case stopAddTodoLoadingAction.type:
      return { ...state, isAddTodoLoading: false };
    case setEditTodoIdLoadingAction.type:
      return { ...state, editTodoIdLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
