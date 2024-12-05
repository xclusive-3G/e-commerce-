import React from 'react'
// import Categories from './Categories/Categories'
// import Price from './Price/Price'
// import Button from '../Components/Button'
import Input from '../Components/Input'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/Store';
import { setSortBy } from '../store/productSlice';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSort = (criteria: 'price' | 'rating') => {
    dispatch(setSortBy(criteria));
  };
  return (
    <div className='w-full flex float-right items-center px-6  pt-10 dark:text-white '>
      
      <h2 className=' font-bold text-lg'>Sort Items</h2>
      <label className='my-3'>
      <Input type='radio' name='sort' className='mx-2' onClick={() => handleSort('price')}/>
          <span className='p-3 font-medium'>Sort By Price</span>
        </label>
        <label >
        <Input type ='radio' name='sort' onClick={() => handleSort('rating')}/>
        <span className='p-3 font-medium'>Sort By Rating</span>
        </label>
    </div>
  )
}

export default Sidebar