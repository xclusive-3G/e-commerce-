import React from 'react'
import { BsFilterSquareFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';

const Subnav: React.FC = () => {
    return (
        <div>
            <div className=' justify-between flex  md:hidden'>
                <div className='flex p-1 cursor-pointer'>
                    <span className=' text-lg font-semibold'>Filter</span> <span><BsFilterSquareFill size={20} className='mx-2 mt-2 ' /></span>
                </div>
                <div className='p-4  flex cursor-pointer'>
                    <FaShoppingCart size={20} className='mx-2' />
                    
                </div>
            </div>
            {/* .....side bar displayed here..... */}
            <div className='hidden md:flex'>
            <Sidebar/>
            {/* <Categories/> */}
            
            </div>
        </div>
    )
}

export default Subnav