import React from 'react';
import { MdOutlineStarRate } from 'react-icons/md';
import { CardProps } from '../webData/Webdata';


const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="shadow-md rounded-lg bg-white w-full h-auto cursor-pointer dark:bg-gray-600 dark:text-white hover:shadow-lg transition-shadow duration-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover rounded-t-lg hover:scale-105 hover:duration-200"
      />
      <div className="p-4 ">
        <p className="font-bold text-lg line-clamp-2 md:truncate">{product.title}</p>
        <p className="font-medium my-2 text-gray-700 dark:text-white">
          <span>$</span>
          {product.price.toFixed(2)}
        </p>
        <p className="flex items-center text-yellow-500">
          {/* star rating */}
          {[...Array(5)].map((_, index) => (
            <MdOutlineStarRate
              key={index}
              className={index < Math.round(product.rating.rate) ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Card;
