import React from 'react'
import Input from '../Components/Input'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/Store';
import { setSortBy } from '../store/productSlice';

interface className{
  className:string|any;
}


const Sidebar: React.FC<className> = React.memo(({className}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSort = (criteria: 'price' | 'rating') => {
    dispatch(setSortBy(criteria));
  };
  return (
    <div className={className}>
      
      <h2 className=' font-bold text-lg'>Sort Items:</h2>
      <label className='my-3'>
      <Input type='radio' name='sort' className='mx-2 ' onClick={() => handleSort('price')}/>
          <span className='py-3 font-medium'>Sort By Price</span>
        </label>
        <label >
        <Input type ='radio' name='sort' className='mx-2' onClick={() => handleSort('rating')}/>
        <span className='py-3 font-medium'>Sort By Rating</span>
        </label>
    </div>
  )
})

export default Sidebar