const API_PREFIX = '/api';

export const ROOT_API_URL = `${process.env.REACT_APP_SERVER_API}${API_PREFIX}`;

export const API = {
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
  },
};
