import { IRequestParams } from '@mihanizm56/fetch-api';
import { changeCheckTodoEndpoint } from '@/api/endpoints/change-check-todo';
import { responseSchema } from './response-schema';

export type TChangeCheckTodoParams = {
  check: boolean;
  id: string;
};

export const makeRequestConfig = (
  params: TChangeCheckTodoParams,
): IRequestParams => ({
  endpoint: changeCheckTodoEndpoint(),
  body: { params },
  responseSchema,
});
