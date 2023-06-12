import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = memo(({ text, disabled, onClick, ...rest }: ButtonProps) => {
  return (
    <button
      className="h-10 w-full rounded-md bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30"
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
});

export default Button;
