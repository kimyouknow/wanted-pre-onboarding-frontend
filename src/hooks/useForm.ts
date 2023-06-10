import { useState } from 'react';

import { getEntries } from '~/utils/util';

type ValidateChecker<T> = Record<keyof T, (v: any) => string>;

export const EVENTS = {
  BLUR: 'blur',
  FOCUS_OUT: 'focusout',
  CHANGE: 'change',
};

const FORM_MODE = {
  onChange: 'onChange',
  onSubmit: 'onSubmit',
  onBlur: 'onBlur',
} as const;

interface UseFormOptions<T> {
  initialValues: T;
  submitCallback: (inputValues: T) => Promise<void>;
  validate: ValidateChecker<T>;
  mode?: keyof typeof FORM_MODE;
}

export type ChangeHandler = (event: { target: any; type?: any }) => void;

interface Control<T> {
  id: keyof T;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  value: string | string[];
  errorMessage: string;
}

export interface UseFormReturns<T> {
  inputValues: T;
  validateError: Record<keyof T, string>;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isTargetSatisfyValidate: (...ids: Array<keyof T>) => boolean;
  isSatisfyAllValidates: () => boolean;
  register: (id: keyof T, isInput?: boolean) => Control<T>;
}

const useForm = <T extends Record<string, string | any[]>>({
  initialValues,
  submitCallback,
  validate,
  mode = FORM_MODE.onChange,
}: UseFormOptions<T>) => {
  const [inputValues, setInputValues] = useState<T>(initialValues);
  const [validateError, setValidateError] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>,
  );

  const resetInputValues = () => {
    setInputValues(initialValues);
  };

  const resetValidateErrors = () => {
    setValidateError({} as Record<keyof T, string>);
  };

  const setAllValidateError = (errorObj: Record<keyof T, string>) =>
    getEntries(errorObj).reduce((acc, [key, value]) => {
      acc[key] = validate[key](value);
      return acc;
    }, {} as Record<keyof T, string>);

  const isSatisfyAllValidates = (): boolean =>
    getEntries(inputValues).every(([key, value]) => validate[key](value));

  const isTargetSatisfyValidate = (...ids: Array<keyof T>): boolean =>
    ids.every(id => !validateError[id]);

  const _onChangeError = (id: keyof T, value: string) => {
    if (mode === FORM_MODE.onSubmit) {
      setValidateError(prev => ({ ...prev, [id]: validate[id](value) }));
    } else {
      setValidateError({ ...validateError, [id]: validate[id](value) });
    }
  };

  const _onBlur: ChangeHandler = event => {
    const { id, value }: { id: keyof T; value: string } = event.target;
    setInputValues({ ...inputValues, [id]: value });
    _onChangeError(id, value);
  };

  const _onChange: ChangeHandler = event => {
    const { id, value }: { id: keyof T; value: string } = event.target;
    setInputValues({ ...inputValues, [id]: value });
    if (mode === FORM_MODE.onBlur) return;
    _onChangeError(id, value);
  };

  const register = <K extends keyof T>(id: K) => {
    return {
      id,
      onChange: _onChange,
      onBlur: _onBlur,
      value: inputValues[id],
      errorMessage: validateError[id],
    };
  };

  const showEntireError = () => {
    setValidateError(setAllValidateError);
    Object.values(validateError)
      .filter(error => error)
      .forEach(error => {
        alert('Error on Submit');
      });
  };

  const submitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event && event.preventDefault();

    if (!isSatisfyAllValidates) {
      showEntireError();
      return;
    }
    await submitCallback(inputValues);
    resetInputValues();
    resetValidateErrors();
  };

  return {
    inputValues,
    validateError,
    submitHandler,
    isSatisfyAllValidates,
    isTargetSatisfyValidate,
    register,
  };
};

export default useForm;
