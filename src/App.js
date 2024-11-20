import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import { products } from "./data/products";
import ProductItem from "./components/ProductItem";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar cartCount={cart.length} />
        <div className="container mx-auto px-4 py-6">
          <CategoryFilter
            categories={["men's clothing", "women's clothing", "electronics", "jewelry"]}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <ProductItem product={product} addToCart={addToCart} />
                    </div>
                  ))}
                </div>
              }
            />
            <Route
              path="/product/:id"
              element={<ProductDetails addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


