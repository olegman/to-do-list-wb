import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import { TODOS_REDUCER_NAME } from '../_redux/todos-module/constants';
import todosReducer from '../_redux/todos-module/reducer';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: TODOS_REDUCER_NAME,
      reducer: todosReducer,
    },
  ],
};
