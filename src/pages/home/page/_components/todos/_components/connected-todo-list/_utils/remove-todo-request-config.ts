import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { removeTodoRequest } from '@/api/requests/remove-todo';
import { setEditTodoIdLoadingAction } from '@/pages/home/page/_components/todos/_redux/todos-module/actions';

type TParams = {
  id: number;
  callBackOnSuccess: () => void;
};

export const removeTodoConfig = ({
  id,
  callBackOnSuccess,
}: TParams): Array<InitLoadManagerRequestOptionsType> => {
  return [
    {
      request: removeTodoRequest,
      requestOptions: {
        id,
      },
      loadingStartAction: () => setEditTodoIdLoadingAction(id),
      loadingStopAction: () => setEditTodoIdLoadingAction(null),
      callBackOnSuccess,
    },
  ];
};
