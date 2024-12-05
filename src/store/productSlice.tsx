import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async action to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

// Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
  category: string;
}

// Allowed sorting options
type SortByOptions = 'price' | 'rating' | "men's clothing" | 'jewelery' | 'electronics' | "women's clothing";

// Product state interface
interface ProductState {
  products: Product[];
  searchTerm: string;
  sortBy: SortByOptions;
  currentPage: number;
  itemsPerPage: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

// Initial state
const initialState: ProductState = {
  products: [],
  searchTerm: '',
  sortBy: 'price', // Default sorting by price
  status: 'idle',
  currentPage: 1,
  itemsPerPage: 8,
};

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
