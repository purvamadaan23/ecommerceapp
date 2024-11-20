import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="flex flex-col items-center py-6">
      <img src={product.image} alt={product.title} className="w-80 h-80 object-cover mb-4" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 text-gray-600">Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-md"
      >
        Add to Cart
      </button>
      <Link to="/" className="mt-4 text-blue-600">Back to Product List</Link>
    </div>
  );
};

export default ProductDetails;



