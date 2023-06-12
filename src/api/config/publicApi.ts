import axios from 'axios';

import { CustomInstance } from '~/api/config/api.type';
import { onResponse, onResponseError } from '~/api/config/interceptor';
import { ROOT_API_URL } from '~/constants/api.constant';

const publicApi: CustomInstance = axios.create({
  baseURL: ROOT_API_URL,
});

publicApi.defaults.timeout = 2500;

publicApi.interceptors.response.use(onResponse, onResponseError);

export default publicApi;
