// src/pages/cart.js
import React from 'react';
import { useCart } from '../contexts/cartcontext';
import ProductCard from '../components/productcard';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>No products in your cart.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              showButtons={false}
              showRemove={true}
              onRemoveCart={() => removeFromCart(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
