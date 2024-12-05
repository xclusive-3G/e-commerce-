import React from 'react'
import Categories from './Categories/Categories'
import Price from './Price/Price'

const Sidebar: React.FC = () => {
  return (
    <div className='w-1/6 left-0 absolute items-center px-6 grid mt-10  '>
      {/* categories Input */}
      <Categories/>
      {/* pricing Input */}
      <Price/>
    </div>
  )
}

export default Sidebar