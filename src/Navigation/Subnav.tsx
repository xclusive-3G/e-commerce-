import React from 'react'
import { BsFilterSquareFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from '../Search/search';

const Subnav: React.FC = () => {

    return (
        <div className='w-auto'>
            <div className=' justify-between flex  md:hidden dark:bg-gray-950 dark:text-white px-auto '>
                <div className='flex  cursor-pointer px-auto py-6'>
                    <span className=' text-lg font-semibold'>Filter</span>
                    <span><BsFilterSquareFill size={20} className=' m-1 ' /></span>
                </div>
                
                <div className='px-auto py-6  flex cursor-pointer'>
                <div className=' w-auto '>
                        <SearchBar className=' w-32 rounded-md text-black '/>
                </div>
                
                    
                    <FaShoppingCart size={20} className='mx-2' />

                </div>
            </div>

        </div>
    )
}

export default Subnav