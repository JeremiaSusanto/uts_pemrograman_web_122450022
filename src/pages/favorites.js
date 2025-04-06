// src/pages/favorites.js
import React from 'react';
import ProductCard from '../components/productcard';
import { useFavorites } from '../contexts/favoritescontext';

const Favorite = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorite Products</h2>
      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              showButtons={false}
              showRemove={true}
              onRemoveFavorite={() => removeFavorite(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
