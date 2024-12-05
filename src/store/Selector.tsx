import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './Store';

export const selectProducts = (state: RootState) => state.products.products;
export const selectSearchTerm = (state: RootState) => state.products.searchTerm;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchTerm],
  (products, searchTerm) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
);
