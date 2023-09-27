import { IResponse, JSONRPCRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const getTodosRequest = (): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig());
