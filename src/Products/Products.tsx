// import dependency
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { fetchProducts } from '../webData/Webdata';
import {  setCurrentPage } from '../store/productSlice';
import { selectPaginatedProducts } from '../store/Selector';
import Card from '../Components/Card';
import Recommended from '../Recommend/Recommended';
import Sidebar from '../Sort/Sort';
import Modal from '../Modal/Modal'; // Import Modal Component

const Products: React.FC = () => {
  // section for redux toolkit
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectPaginatedProducts);
  const status = useSelector((state: RootState) => state.products.status);
  const currentPage = useSelector((state: RootState) => state.products.currentPage);
  const totalProducts = useSelector((state: RootState) => state.products.products.length);
  const itemsPerPage = useSelector((state: RootState) => state.products.itemsPerPage);
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  

  // state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);


// section to get api data
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  // function for page change
  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  // function for modal
  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen dark:bg-gray-950 bg-gray-50 text-black dark:text-white transition-colors duration-300">
      {/* display recommendation button for men and women clothes etc */}
      <section className="md:w-full p-6 h-auto w-full mx-auto right-0">
        <Recommended />
        {/* sort by rate and price section */}
        <div className="hidden md:flex">
          <Sidebar className="w-full flex float-right items-center px-6   dark:text-white "/>
        </div>
        {/* code to load data to a web */}

        {status === 'loading' ? (
          <p className="text-center items-center">Loading...</p>
        ) : (
          <>
            <div className="grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div key={product.id} onClick={() => handleOpenModal(product)}>
                  <Card product={product} />
                </div>
              ))}
            </div>
            {/* pagination section */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 ${currentPage === index + 1
                      ? 'bg-blue-500 text-black '
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
{/* modal section */}
      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProduct && (
          <div>
            <div className="flex justify-center items-center mt-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-64 object-contain rounded-md"
              />
            </div>
            <h2 className="text-lg font-bold text-center">{selectedProduct.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
              Price: ${selectedProduct.price.toFixed(2)}
            </p>
            <p className="mt-4 text-center">{selectedProduct.description}</p>

          </div>
        )}
      </Modal>

    </div>
  );
};

export default Products;
