// src/components/productcard.js
import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './starrating'; // ✅ Tambahkan ini
import { Link } from 'react-router-dom';

const ProductCard = ({
  product,
  onAddFavorite,
  onAddCart,
  onRemoveFavorite,
  onRemoveCart,
  showButtons = true,
  showRemove = false,
}) => {
  return (
    <div className="border border-gray-300 hover:shadow-md rounded-lg p-4 shadow-sm">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-cover mb-2 rounded"
        />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <StarRating rating={product.rating} />
        <p className="text-sm text-gray-600">{product.description?.slice(0, 100)}...</p>
        <p className="font-bold mt-2">${product.price}</p>
      </Link>

      {showButtons && (
        <div className="flex justify-between mt-2">
          <button
            onClick={() => onAddFavorite?.(product)}
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-2 py-1 rounded"
          >
            Favorite
          </button>
          <button
            onClick={() => onAddCart?.(product)}
            className="bg-green-500 hover:bg-green-600 transition-colors text-white px-2 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      )}

      {showRemove && onRemoveFavorite && (
        <div className="flex justify-end mt-2">
          <button
            onClick={onRemoveFavorite}
            className="bg-red-500 hover:bg-red-600 transition-colors text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      )}

      {showRemove && onRemoveCart && (
        <div className="flex justify-end mt-2">
          <button
            onClick={onRemoveCart}
            className="bg-red-500 hover:bg-red-600 transition-colors text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddFavorite: PropTypes.func,
  onAddCart: PropTypes.func,
  onRemoveFavorite: PropTypes.func,
  onRemoveCart: PropTypes.func,
  showButtons: PropTypes.bool,
  showRemove: PropTypes.bool,
};

export default ProductCard; // ✅ WAJIB ADA!
