import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import { getTodosRequest } from '@/api/requests/get-todos';
import {
  setTodosAction,
  startLoadingTodosAction,
  stopLoadingTodosAction,
} from '@/pages/home/page/_components/todos/_redux/todos-module/actions';
import { TODOS_REDUCER_NAME } from '../_redux/todos-module/constants';
import todosReducer from '../_redux/todos-module/reducer';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: TODOS_REDUCER_NAME,
      reducer: todosReducer,
    },
  ],
  initialLoadManagerConfig: {
    requestConfigList: [
      {
        request: getTodosRequest,
        actionSuccess: setTodosAction,
        loadingStartAction: startLoadingTodosAction,
        loadingStopAction: stopLoadingTodosAction,
      },
    ],
  },
};
