import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../webData/Webdata';
import { fetchProducts } from '../webData/Webdata';
// Define the async action to fetch products

// Product slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Exporting actions and reducer
export const { setSearchTerm, setSortBy, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
