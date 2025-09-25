import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";

import Search from "@/assets/icons/search.svg?react";

type Props = {
  label?: string;
  value?: string;
  isSearch?: boolean;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const Input = ({
  label,
  value,
  isSearch = false,
  placeholder,
  name,
  disabled,
  onChange,
  type = "text",
  ...rest
}: Props): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const inputClasses = clsx(
    "w-full px-[10px] py-2 text-[#6A6996] focus:outline-none transition-opacity duration-300 ease-in-out",
    label && "border-b border-b-[#D6D6D6] px-[1px] py-[1px]",
    disabled ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-text"
  );

  return (
    <div className="w-full">
      <label htmlFor={name} className="text-xs text-[#D6D6D6] flex-col">
        {label}
      </label>
      <div className="flex items-center">
        {isSearch && <Search aria-label="search" className="text-[#BCBCCB] w-4 h-4" />}
        <input
          className={inputClasses}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
          aria-label={placeholder || type}
          id={name}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
