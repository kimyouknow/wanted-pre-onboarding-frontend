import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { HttpError } from '~/api/config/customError';
import authService from '~/service/auth.service';

export const onRequest = (config: InternalAxiosRequestConfig) => {
  try {
    const accessToken = authService.getToken();
    if (typeof accessToken !== 'string') {
      throw Error('올바른 형식의 토큰이 없습니다.');
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
    throw new Error('로그인이 필요합니다.');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const onRequestError = (error: AxiosError) => {
  return error;
};

export const onResponse = (response: AxiosResponse) => {
  return response;
};

export const onResponseError = (error: AxiosError) => {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  console.error(error);
  if (error.response) {
    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.

    const {
      response: { status },
    } = error;

    // 서버에서 보낸 custom 에러 메세지가 없을 경우 기본 메세지를 에러 메세지로 전달
    return Promise.reject(new HttpError(error.message, status));
  }
  if (error.request) {
    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
    // Node.js의 http.ClientRequest 인스턴스입니다.
    console.log(error.request);
  } else {
    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    console.log('Error', error.message);
  }

  return Promise.reject(new Error('요청 도중 에러 발생'));
};
