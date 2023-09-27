import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { changeCheckTodoRequest } from '@/api/requests/change-check-todo';
import { setEditTodoIdLoadingAction } from '@/pages/home/page/_components/todos/_redux/todos-module/actions';

type TParams = {
  check: boolean;
  id: number;
  callBackOnSuccess: () => void;
};

export const changeCheckTodoConfig = ({
  check,
  id,
  callBackOnSuccess,
}: TParams): Array<InitLoadManagerRequestOptionsType> => {
  return [
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
  ];
};
