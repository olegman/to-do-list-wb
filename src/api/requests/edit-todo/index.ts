import { IResponse, JSONRPCRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig, TEditTodoParams } from './make-request-config';

export const editTodoRequest = (params: TEditTodoParams): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(params));
