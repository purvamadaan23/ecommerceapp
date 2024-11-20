import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MarketPlace
        </Link>
        <Link to="/cart" className="text-lg">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



