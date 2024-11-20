import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="mt-2 text-gray-500">{product.description.substring(0, 100)}...</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <Link
          to={`/product/${product.id}`}
          className="block text-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;



