// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Favorite from './pages/favorites';
import Cart from './pages/cart';
import ProductDetail from './pages/product-detail';
import NotFound from './pages/not-found';
import MainLayout from './layouts/mainlayout';
import { FavoritesProvider } from './contexts/favoritescontext';
import { CartProvider } from './contexts/cartcontext';

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorite />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
