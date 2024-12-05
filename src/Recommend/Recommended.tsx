import React from 'react';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/Store';
import { setSortBy } from '../store/productSlice';

const Recommended: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSort = (criteria: "men's clothing" | 'jewelery' | 'electronics' | "women's clothing" | '') => {
    dispatch(setSortBy(criteria)); // Dispatch the selected category or reset
  };

  return (
    <div className="flex flex-wrap  ">
      <Button value="All Products" onClick={() => handleSort('')} />
      <Button value="Men's Clothing" onClick={() => handleSort("men's clothing")} />
      <Button value="Women's Clothing" onClick={() => handleSort("women's clothing")} />
      <Button value="Jewelery" onClick={() => handleSort('jewelery')} />
      <Button value="Electronics" onClick={() => handleSort('electronics')} />
    </div>
  );
};

export default Recommended;
