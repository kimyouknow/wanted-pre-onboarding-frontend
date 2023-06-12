import browserStorage from '~/utils/browserStorage';

const authService = {
  isLogin: () => !!browserStorage.get('token'),
  saveToken: (token: string) => browserStorage.set('token', token),
  getToken: () => browserStorage.get('token'),
  logout: () => browserStorage.remove('token'),
};

export default authService;
