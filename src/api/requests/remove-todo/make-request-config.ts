import { IRequestParams } from '@mihanizm56/fetch-api';
import { removeTodoEndpoint } from '@/api/endpoints/remove-todo';
import { responseSchema } from './response-schema';

export type TRemoveTodoParams = {
  id: string;
};

export const makeRequestConfig = (
  params: TRemoveTodoParams,
): IRequestParams => ({
  endpoint: removeTodoEndpoint(),
  body: { params },
  responseSchema,
});
