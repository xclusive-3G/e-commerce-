import React from 'react'
type InputProps = {
  placeholder?: string;
  className?: string;
  type?:string;
  name?:string;
};


const Input: React.FC<InputProps> = ({placeholder,className, type,name}) => {
  return (
    <input type={type} placeholder={placeholder} className={className} name={name}  />
  )
}

export default Input