import React from 'react'
import Input from '../../Components/Input'

const Categories:React.FC = () => {
  return (
    <div><div className='py-2'>
    <h2 className='font-semibold text-xl'>Categories</h2>
    <p className=''>
    <label >
      <Input type='radio' name="categories" className='mr-2'/>
      <span>ALL</span>
    </label>
    </p>
    <p>
    <label >
      <Input type='radio' name="categories" className='mr-2'/>
      <span>Men's Clothing</span>
    </label>
    </p>
    <p>
    <label >
      <Input type='radio' name="categories" className='mr-2'/>
      <span>Women's Clothings</span>
    </label>
    </p>
    
  </div></div>
  )
}

export default Categories