import publicApi from '~/api/publicApi';
import { API } from '~/constants/api.constant';

const authApi = {
  signUp(email: string, password: string) {
    return publicApi.post<{ message: string }>(API.AUTH.SIGNUP, {
      email,
      password,
    });
  },
  signIn(email: string, password: string) {
    return publicApi.post<{ message: string; access_token: string }>(
      API.AUTH.SIGNIN,
      {
        email,
        password,
      },
    );
  },
};

export default authApi;
