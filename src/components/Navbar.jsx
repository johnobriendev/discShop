import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = ({ cartCount }) => {
  const { cartItems } = useCart();
  
  return (
    <nav className='fixed top-0 left-0 w-full shadow-md bg-blue-50 z-10 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link className='text-2xl md:text-4xl hover:text-sky-400 transition-colors' to="/">Barry's Disc Shop</Link>
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


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';

// const Navbar = ({ cartCount }) => {
//   const { cartItems } = useCart();
  
//   return (
//     <nav className=' fixed top-0 left-0 w-full shadow-md bg-white z-10 p-4'>
//       <div className='flex justify-between mx-auto items-center'>
//         <Link className='font-semibold text-2xl md:text-4xl' to="/">Barry's Disc Shop</Link>
//         <ul className='flex gap-5 text-xl'>
//           <li>
//             <Link to="/discs">Shop</Link>
//           </li>
//           <li>
//             <Link to="/cart">Cart ({cartCount})</Link>
//           </li>
//         </ul>
//       </div>
      
//     </nav>
//   );
// };

// export default Navbar;