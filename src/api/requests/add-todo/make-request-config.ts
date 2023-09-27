import { IRequestParams } from '@mihanizm56/fetch-api';
import { addTodoEndpoint } from '@/api/endpoints/add-todo';
import { responseSchema } from './response-schema';

export type TAddTodoParams = {
  name: string;
  description: string;
};

export const makeRequestConfig = (params: TAddTodoParams): IRequestParams => ({
  endpoint: addTodoEndpoint(),
  body: { params },
  responseSchema,
});
