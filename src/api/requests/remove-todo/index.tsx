import { IResponse, JSONRPCRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig, TRemoveTodoParams } from './make-request-config';

export const removeTodoRequest = (
  params: TRemoveTodoParams,
): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(params));
