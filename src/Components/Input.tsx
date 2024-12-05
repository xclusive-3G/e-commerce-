import React, { ChangeEvent } from 'react';

type InputProps = {
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Correct type
};

const Input: React.FC<InputProps> = ({ placeholder, className, type = 'text', name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      onChange={onChange} // Ensure it's passed as a function
    />
  );
};

export default Input;
