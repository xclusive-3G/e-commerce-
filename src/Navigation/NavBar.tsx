import React, { useEffect, useState } from 'react'
import { NavData } from '../webData/Webdata';
import Search from '../Search/search';


const NavBar: React.FC = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Persist theme in localStorage
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark';
    });

    // Toggle theme
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);
    return (
        <>
            <div className=' justify-between text-white items-center flex bg-gray-500 dark:bg-gray-950  z-50 w-full '>
                {/* Logo */}
                <div className=' p-4 font-signature text-2xl'>
                    Sekani Store
                </div>
                

                <div className='flex p-4'>
                    <div className='py-6'>
                    <Search className='w-full p-2 border rounded-md text-black hidden md:flex'/>

                    </div>
                    {/* items on the left */}
                    <ul className='flex p-4 cursor-pointer m-2'>
                        
                        {NavData.map(({ id, title }) => (
                            <li key={id} className='p-3 hidden md:flex '>
                                <a href="#">{title}</a>
                            </li>
                        ))}
                        <li>
                        <button
                                onClick={toggleDarkMode}
                                className="px-4 py-2  text-white rounded-md bg-green-500 font-medium"
                            >
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </li>   
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar