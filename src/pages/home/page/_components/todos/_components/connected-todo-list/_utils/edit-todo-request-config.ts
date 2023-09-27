import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { editTodoRequest } from '@/api/requests/edit-todo';
import { setEditTodoIdLoadingAction } from '@/pages/home/page/_components/todos/_redux/todos-module/actions';

type TParams = {
  name: string;
  description: string;
  id: number;
  callBackOnSuccess: () => void;
};

export const editTodoConfig = ({
  name,
  description,
  id,
  callBackOnSuccess,
}: TParams): Array<InitLoadManagerRequestOptionsType> => {
  return [
    {
      request: editTodoRequest,
      requestOptions: {
        name,
        description,
        id,
      },
      callBackOnSuccess,
      loadingStartAction: () => setEditTodoIdLoadingAction(id),
      loadingStopAction: () => setEditTodoIdLoadingAction(null),
    },
  ];
};
