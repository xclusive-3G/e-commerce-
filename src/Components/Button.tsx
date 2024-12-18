import React from "react"
import { ButtonProps } from "../webData/Webdata"

const Button:React.FC<ButtonProps> =React.memo( ({value,onClick}) => {
  return (
    <button onClick={onClick} className=' px-4 py-2 rounded-sm shadow-md m-1 z-30 font-medium dark:text-white dark:shadow-gray-400 hover:bg-[rgba(0,0,0,0.1)] hover:font-bold hover:scale-105 hover:duration-200'>{value}</button>
  )
})

export default Button