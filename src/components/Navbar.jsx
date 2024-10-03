import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = ({ cartCount }) => {
  const { cartItems } = useCart();
  
  return (
    <nav className='fixed top-0 left-0 w-full shadow-md bg-blue-50 z-10 pb-4'>
      <div className='w-full text-center mb-4 bg-slate-400 py-1'>Domestic orders over $60 ship for FREE!</div>
      <div className='container mx-auto flex justify-between items-center px-2'>
        <Link className='text-2xl md:text-4xl hover:text-sky-400 transition-colors' to="/">Disc Shop</Link>
        <ul className='flex gap-5 text-xl'>
          <li>
            <Link to="/discs" className="hover:text-sky-400 transition-colors">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-sky-400 transition-colors">
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
