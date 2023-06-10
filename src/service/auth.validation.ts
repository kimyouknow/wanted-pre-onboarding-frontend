import { emailRegex } from '~/constants/service.constant';

export interface AuthValidateFormProps {
  email: string;
  password: string;
}

export const authValidate = {
  email(email: string): string {
    if (!email) {
      return '이메일이 입력되지 않았습니다.';
    } else if (!email.match(emailRegex)) {
      return '"@"이 포함된 이메일 형식으로 입력해주세요.';
    }
    return '';
  },
  password(password: string): string {
    if (!password) {
      return '비빌번호가 입력되지 않았습니다.';
    } else if (password.length < 8) {
      return '비빌번호는 8자 이상이어야 합니다. ';
    }
    return '';
  },
};
