import { IResponse, JSONRPCRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig, TAddTodoParams } from './make-request-config';

export const addTodoRequest = (params: TAddTodoParams): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(params));
