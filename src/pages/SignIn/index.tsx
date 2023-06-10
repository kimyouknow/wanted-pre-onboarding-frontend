import Button from '~/components/Button/Button';
import TextInput from '~/components/TextInput/TextInput';
import useForm from '~/hooks/useForm';
import { AuthValidateFormProps, authValidate } from '~/service/auth.validation';

const SignIn = () => {
  const submitCallback = async ({
    email,
    password,
  }: // eslint-disable-next-line @typescript-eslint/no-empty-function
  AuthValidateFormProps) => {};

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
          data-testid="signin-button"
        />
      </form>
    </div>
  );
};

export default SignIn;