import { IResponse, JSONRPCRequest } from '@mihanizm56/fetch-api';
import {
  makeRequestConfig,
  TChangeCheckTodoParams,
} from './make-request-config';

export const changeCheckTodoRequest = (
  params: TChangeCheckTodoParams,
): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(params));
