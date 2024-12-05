import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';
import { SearchInterFace } from '../webData/Webdata';

const SearchBar: React.FC<SearchInterFace> = ({className}) => {
  const dispatch = useDispatch();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className={className}
      />
      
    </div>
  );
};

export default SearchBar;
