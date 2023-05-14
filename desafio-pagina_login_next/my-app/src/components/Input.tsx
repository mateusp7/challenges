import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  id: string;
  value: string;
  placeholder: string;
  setValue: (value: string) => void
}

const Input: FC<InputProps> = ({
  labelName,
  id,
  value,
  setValue,
  placeholder,
  ...props
}) => {
  return (
    <>
      <label className="block text-xs font-bold" htmlFor={id}>
        {labelName}
      </label>
      <input
        className="py-3 px-4 rounded-3xl bg-[#f2f2f2] w-full mt-2 mb-4 outline-none"
        name={id}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default Input;
