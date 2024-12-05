import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="w-full p-2 border rounded-md text-black hidden md:flex"
      />
      
    </div>
  );
};

export default SearchBar;
