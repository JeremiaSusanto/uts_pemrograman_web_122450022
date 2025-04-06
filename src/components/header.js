import React from 'react';
import PropTypes from 'prop-types';
import { useTitle } from '../hooks/usetitle'; // Assuming you have a custom hook for setting the title
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  useTitle(title);
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center ml-6 space-x-4">
        <img src="/image/logo-aja.png" alt="Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <nav className="space-x-4 mr-5 ">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/favorites" className="hover:underline">Favorites</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
