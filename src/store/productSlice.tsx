// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

// interface ProductState {
//   products: Product[];
//   searchTerm: string;
//   status: 'idle' | 'loading' | 'failed';
// }

// const initialState: ProductState = {
//   products: [],
//   searchTerm: '',
//   status: 'idle',
// };

// // Fetch products from API
// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await axios.get('https://fakestoreapi.com/products');
//   return response.data;
// });

// const productSlice = createSlice({
//     name: 'products',
//     initialState: {
//       products: [],
//       status: 'idle',
//       searchTerm: '',
//     },
//     reducers: {
//       setSearchTerm(state, action) {
//         state.searchTerm = action.payload;
//       },
//     },
//     extraReducers: (builder) => {
//         builder
//           .addCase(fetchProducts.pending, (state) => {
//             state.status = 'loading';
//           })
//           .addCase(fetchProducts.fulfilled, (state, action) => {
//             state.status = 'idle';
//             state.products = action.payload;
//           })
//           .addCase(fetchProducts.rejected, (state) => {
//             state.status = 'failed';
//           });
//       },    
// });

// export const { setSearchTerm } = productSlice.actions;

// export default productSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductState {
  products: Product[];
  searchTerm: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductState = {
  products: [],
  searchTerm: '',
  status: 'idle',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
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

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
