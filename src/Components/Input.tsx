import React, { ChangeEvent } from 'react';

type InputProps = {
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Correct type
  onClick?:()=>void
};

const Input: React.FC<InputProps> = ({ placeholder, className, type , name, onChange,onClick }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      onChange={onChange} // Ensure it's passed as a function
      onClick={onClick}
    />
  );
};

export default Input;
