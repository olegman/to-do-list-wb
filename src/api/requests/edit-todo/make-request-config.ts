import { IRequestParams } from '@mihanizm56/fetch-api';
import { editTodoEndpoint } from '@/api/endpoints/edit-todo';
import { responseSchema } from './response-schema';

export type TEditTodoParams = {
  name: string;
  description: string;
  id: string;
};

export const makeRequestConfig = (params: TEditTodoParams): IRequestParams => ({
  endpoint: editTodoEndpoint(),
  body: { params },
  responseSchema,
});
