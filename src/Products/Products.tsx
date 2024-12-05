import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { fetchProducts, setCurrentPage } from '../store/productSlice';
import { selectPaginatedProducts } from '../store/Selector';
import Card from '../Components/Card';
import Recommended from '../Recommend/Recommended';

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectPaginatedProducts);
  const status = useSelector((state: RootState) => state.products.status);
  const currentPage = useSelector((state: RootState) => state.products.currentPage);
  const totalProducts = useSelector((state: RootState) => state.products.products.length);
  const itemsPerPage = useSelector((state: RootState) => state.products.itemsPerPage);
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <section className="md:w-10/12 h-auto w-full right-0 absolute">
      <div className="mb-4 flex justify-between">
        
      </div>

      <div className="grid w-full justify-center">
        <Recommended />
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
      </div>
    </section>
  );
};

export default Products;
