import React, { useState } from 'react';
import { products } from '../data/products';
import ProductItem from './ProductItem';

const ProductList = ({ setSelectedCategory }) => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 mb-6 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out bg-gray-200 text-gray-800 hover:bg-blue-100"
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out bg-gray-200 text-gray-800 hover:bg-blue-100"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

