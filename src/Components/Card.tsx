import React from 'react'
import feet from '../assets/feet.jpg'
import { MdOutlineStarRate } from "react-icons/md";


const Card:React.FC = () => {
  return (
    <div className='  shadow-md rounded-md bg-white w-full h-auto hover:shadow-lg transition-shadow duration-200  cursor-pointer'>

      <img src={feet} className=' w-full h-48 object-cover rounded-t-md' />
      <div className='p-2'>
        <p className='font-bold text-lg truncat'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <p className='font-medium my-2 text-gray-700'><span>$</span>109.95</p>
        <p className='flex items-center text-yellow-500"'><MdOutlineStarRate /><MdOutlineStarRate /><MdOutlineStarRate /><MdOutlineStarRate /></p>
      </div>
    </div>
  )
}

export default Card