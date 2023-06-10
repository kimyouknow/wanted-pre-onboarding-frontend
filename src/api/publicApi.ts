import axios from 'axios';

import { CustomInstance } from '~/api/api.type';
import { onResponse, onResponseError } from '~/api/responseHandler';
import { ROOT_API_URL } from '~/constants/api.constant';

const publicApi: CustomInstance = axios.create({
  baseURL: ROOT_API_URL,
});

publicApi.defaults.timeout = 2500;

publicApi.interceptors.response.use(onResponse, onResponseError);

export default publicApi;
