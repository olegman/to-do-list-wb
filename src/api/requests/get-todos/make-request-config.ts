import { getTodosEndpoint } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export const makeRequestConfig = () => ({
  endpoint: getTodosEndpoint(),
  responseSchema,
});
