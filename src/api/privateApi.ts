import axios from 'axios';

import { CustomInstance } from '~/api/api.type';
import { onResponse, onResponseError } from '~/api/responseHandler';
import { ROOT_API_URL } from '~/constants/api.constant';

const privateApi: CustomInstance = axios.create({
  baseURL: ROOT_API_URL,
});

privateApi.defaults.timeout = 2500;

privateApi.interceptors.response.use(onResponse, onResponseError);

export default privateApi;
