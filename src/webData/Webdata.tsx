import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ChangeEvent } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface NavItem {
    id: string | number; // Replace with the actual type for `id`
    title: any;       // Replace with the actual type for `title`
    link:any
  }

export const NavData: NavItem[] = [
    {
        id: 1,
        title: <FaShoppingCart size={20} className='mx-2' />,
        link:"#"
    },
    
]

export type ButtonProps = {
    value: string|number;
    onClick?: ()=> void;
  };

  interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface CardProps {
    product: Product;
  }

  export type InputProps = {
    placeholder?: string;
    className?: string;
    type?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Correct type
    onClick?:()=>void
  };
  
  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

  export interface SearchInterFace{
    className: string;
  }
  

//   redux interface and api

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
  export const initialState: ProductState = {
    products: [],
    searchTerm: '',
    sortBy: 'price', // Default sorting by price
    status: 'idle',
    currentPage: 1,
    itemsPerPage: 8,
  };
  