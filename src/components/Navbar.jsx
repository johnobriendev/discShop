import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className='flex justify-between mb-5'>
      <h1 className='text-4xl'>Barry's Disc Shop</h1>
      <ul className='flex gap-5 text-xl'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/discs">Shop</Link>
        </li>
        <li>
          Cart ({cartCount})
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;