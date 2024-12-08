import React, { useState } from 'react'
import { BsFilterSquareFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from '../Search/search';
import Sidebar from '../Sort/Sort';
import { IoClose } from "react-icons/io5";



const Subnav: React.FC = React.memo(() => {
    const [sortBy, setSortBy] = useState(false)

    return (
        <div className='w-auto'>
            <div className=' justify-between flex  md:hidden dark:bg-gray-950 dark:text-white px-2 '>
                <div className='flex  cursor-pointer px-auto py-6'>
                    <span className=' text-lg font-semibold'>Filter</span>
                    <span><BsFilterSquareFill size={20} className=' m-1 ' onClick={() => setSortBy(!sortBy)} /></span>
                </div>
                {/* display sorting to nav for mobile */}
                {sortBy && <div className='flex flex-col  absolute  
            left-0 w-full h-auto bg-gradient-to-b my-auto from-black to-gray-900 text-white z-40'>
                    <p className='float-right flex justify-end p-2 cursor-pointer' onClick={()=>setSortBy(!sortBy)}><IoClose size={20} /></p>
                    <Sidebar className="grid w-full  px-6   dark:text-white " /></div>}

                <div className='px-auto my-6  flex cursor-pointer'>

                    <div className=' w-auto '>
                        <SearchBar className=' w-32 rounded-md text-black ' />
                    </div>


                    <FaShoppingCart size={20} className='mx-2' />

                </div>
            </div>

        </div>
    )
});

export default Subnav