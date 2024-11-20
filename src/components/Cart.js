import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="border-b py-4 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-bold">{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-bold">
              Total: $
              {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
            </p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


