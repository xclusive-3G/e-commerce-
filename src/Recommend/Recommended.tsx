import React from 'react'
import Button from '../Components/Button'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { setSortBy } from '../store/productSlice';


const Recommended:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSort = (criteria: 'price' | 'rating') => {
    dispatch(setSortBy(criteria));
  };
  return (
    <div>
      <Button value ="Sort by Price" onClick={() => handleSort('price')}/>
      <Button value ="Sort by Rating" onClick={() => handleSort('rating')}/>
      <Button value = "All Products"/>
      <Button value = "Men's clothing "/>
      <Button value = "Women's clothing "/>
      <Button value = "Jewelery"/>
      <Button value = "Electronics"/>
      {/* <button
          
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sort by Price
        </button>
        <button
          onClick={() => handleSort('rating')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sort by Rating
        </button> */}
    </div>
  )
}

export default Recommended