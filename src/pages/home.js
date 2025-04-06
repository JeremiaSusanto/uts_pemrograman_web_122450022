// src/pages/home.jsx
import { useEffect, useState } from 'react';
import ProductCard from '../components/productcard';
import { useFavorites } from '../contexts/favoritescontext';
import { useCart } from '../contexts/cartcontext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addFavorite } = useFavorites();
  const { addCart } = useCart();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=12')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="mr-2 ml-2">
      <h2 className="text-2xl font-bold mb-4 ">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddFavorite={addFavorite}
            onAddCart={addCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
