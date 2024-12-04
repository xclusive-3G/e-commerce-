import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { NavData } from '../webData/Webdata';
import { IoMdClose } from "react-icons/io";
import Input from '../Components/Input';
import { FaSearch } from "react-icons/fa";
import Button from '../Components/Button';


const NavBar: React.FC = () => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className=' justify-between text-white items-center flex bg-slate-500  z-50 w-full '>
                {/* Logo */}
                <div className=' p-4 font-signature text-2xl'>
                    Sekani Store
                </div>
                {/* search input button */}
                <div className='hidden md:flex'>
                    <Input placeholder="search" />
                    <Button value={<FaSearch size={20} className='' />}/>
                </div>

                <div className='flex p-4'>
                    {/* items on the left */}
                    <ul className='flex p-4 cursor-pointer'>
                        <li className='flex md:hidden mx-2'>

                            <FaSearch size={20} className=' ' />
                        </li>
                        {NavData.map(({ id, title }) => (
                            <li key={id} className='px-2 hidden md:flex'>
                                <a href="#">{title}</a>
                            </li>
                        ))}

                        <div onClick={() => setNav(!nav)} className='flex md:hidden'>
                            {nav ? <IoMdClose size={25} /> : <CiMenuFries size={25} />}
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar