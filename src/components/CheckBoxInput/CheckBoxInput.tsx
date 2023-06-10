import { InputHTMLAttributes, forwardRef, memo } from 'react';

interface CheckBoxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const CheckBoxInput = memo(
  forwardRef<HTMLInputElement, CheckBoxInputProps>(
    ({ id, label, checked, onChange }, ref) => {
      return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          {label}
        </div>
      );
    },
  ),
);

export default CheckBoxInput;
