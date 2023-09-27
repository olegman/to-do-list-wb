import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { addTodoRequest } from '@/api/requests/add-todo';
import {
  startAddTodoLoadingAction,
  stopAddTodoLoadingAction,
} from '@/pages/home/page/_components/todos/_redux/todos-module/actions';
import { TPayloadTodos } from '@/pages/home/page/_components/todos/_redux/todos-module/types';

type TParams = {
  name: string;
  description: string;
  callBackOnSuccess: (params: { responseData: TPayloadTodos }) => void;
};

export const addTodoConfig = ({
  name,
  description,
  callBackOnSuccess,
}: TParams): Array<InitLoadManagerRequestOptionsType> => {
  return [
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
  ];
};
