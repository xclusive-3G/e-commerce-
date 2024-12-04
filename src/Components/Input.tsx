import React from 'react'
type InputProps = {
  placeholder?: string;
};


const Input: React.FC<InputProps> = ({placeholder}) => {
  return (
    <input type="text" placeholder={placeholder} className='px-3' />
  )
}

export default Input