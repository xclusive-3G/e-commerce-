import React from 'react'
type ButtonProps = {
    value: any;
  };


const Button:React.FC<ButtonProps> = ({value}) => {
  return (
    <button className=' px-4 py-2 rounded-sm shadow-md m-1 font-medium hover:bg-[rgba(0,0,0,0.1)] hover:font-bold hover:scale-105 hover:duration-200'>{value}</button>
  )
}

export default Button