import { InputHTMLAttributes, forwardRef, memo } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  errorMessage: string | null | undefined;
}

const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>(
    (
      {
        label,
        id,
        placeholder,
        value,
        onChange,
        onBlur,
        errorMessage,
        type = 'text',
        ...rest
      },
      ref,
    ) => {
      return (
        <div className="flex w-full flex-col p-2">
          {label && (
            <label className="mb-2 font-semibold" htmlFor={id}>
              {label}
            </label>
          )}
          <div className="flex items-center">
            <input
              id={id}
              ref={ref}
              type={type}
              className="w-full rounded-lg border border-gray-400 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              autoComplete="off"
              {...rest}
            />
          </div>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      );
    },
  ),
);

export default TextInput;
