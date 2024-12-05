import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { fetchProducts, setCurrentPage } from '../store/productSlice';
import { selectPaginatedProducts } from '../store/Selector';
import Card from '../Components/Card';
import Recommended from '../Recommend/Recommended';
import Sidebar from '../Sidebar/Sidebar';

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectPaginatedProducts);
  const status = useSelector((state: RootState) => state.products.status);
  const currentPage = useSelector((state: RootState) => state.products.currentPage);
  const totalProducts = useSelector((state: RootState) => state.products.products.length);
  const itemsPerPage = useSelector((state: RootState) => state.products.itemsPerPage);
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Handle theme toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Update the HTML class for dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="min-h-screen dark:bg-gray-950 bg-gray-50 text-black dark:text-white transition-colors duration-300">
      



      <section className="md:w-full p-6 h-auto w-full mx-auto  right-0">
        <Recommended />
        <div className="hidden md:flex">
        <Sidebar />
      </div>

        {status === 'loading' ? (
          <p className="text-center items-center">Loading...</p>
        ) : (
          <>
            <div className="grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  } rounded`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Products;
