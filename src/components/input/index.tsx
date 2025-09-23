import { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";

import Search from "@/assets/icons/search.svg?react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const Input = ({
  value,
  placeholder,
  disabled,
  onChange,
  type = "text",
  ...rest
}: Props): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="flex items-center w-full">
      <Search aria-label="search" />
      <input
        className={`w-full px-[10px] py-2 focus:outline-none transition-opacity duration-300 ease-in-out ${
          disabled ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-text"
        }`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label={placeholder || type}
        {...rest}
      />
    </div>
  );
};

export default Input;
