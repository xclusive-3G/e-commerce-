import React, { useEffect, useState } from 'react';
import Recommended from '../Recommend/Recommended';
import Card from '../Components/Card';
import axios from 'axios';

interface ProductsInterface {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductsInterface[]>([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts(); // Call the function here
  }, []);

  return (
    <section className="md:w-10/12 h-auto w-full right-0 absolute">
      <div className="grid w-full justify-center">
        <Recommended />
        {/* Segment for cards */}
        <div className="grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
