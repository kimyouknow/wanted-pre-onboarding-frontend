import authApi from '~/api/domain/authApi';
import Button from '~/components/Button/Button';
import TextInput from '~/components/TextInput/TextInput';
import useForm from '~/hooks/useForm';
import { useRouter } from '~/hooks/useRouter';
import { ROUTE } from '~/router/routerInfo';
import { AuthValidateFormProps, authValidate } from '~/service/auth.validation';

const SignUp = () => {
  const { routeTo } = useRouter();

  const submitCallback = async ({ email, password }: AuthValidateFormProps) => {
    try {
      const response = await authApi.signUp(email, password);
      alert('회원가입 성공~');
      routeTo(ROUTE.SIGN_IN);
    } catch (error) {
      alert('회원가입 실패');
    }
  };

  const { register, submitHandler, isTargetSatisfyValidate } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: authValidate,
    submitCallback,
    mode: 'onChange',
  });

  const isSignUpValidate = isTargetSatisfyValidate('email', 'password');

  return (
    <div className="mx-auto my-auto flex w-1/2 min-w-max flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md ">
      <form
        onSubmit={submitHandler}
        className="mx-auto my-auto mt-12 flex w-full flex-col items-center justify-center gap-4"
      >
        <TextInput
          label="Email"
          placeholder="Email address *"
          {...register('email')}
          data-testid="email-input"
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Password *"
          {...register('password')}
          data-testid="password-input"
        />
        <Button
          text="SUBMIT"
          disabled={!isSignUpValidate}
          data-testid="signup-button"
        />
      </form>
    </div>
  );
};

export default SignUp;
