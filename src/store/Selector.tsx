import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './Store';

// Selectors for individual states
export const selectProducts = (state: RootState) => state.products.products;
export const selectSearchTerm = (state: RootState) => state.products.searchTerm;
export const selectSortBy = (state: RootState) => state.products.sortBy;
export const selectCurrentPage = (state: RootState) => state.products.currentPage;
export const selectItemsPerPage = (state: RootState) => state.products.itemsPerPage;

// Filter and Sort Selector
export const selectFilteredAndSortedProducts = createSelector(
  [selectProducts, selectSearchTerm, selectSortBy],
  (products, searchTerm, sortBy) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === 'price') {
      return [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'rating') {
      return [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return filtered;
  }
);

// Pagination Selector
export const selectPaginatedProducts = createSelector(
  [selectFilteredAndSortedProducts, selectCurrentPage, selectItemsPerPage],
  (filteredAndSortedProducts, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }
);
