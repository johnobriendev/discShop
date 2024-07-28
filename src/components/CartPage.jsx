
import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, getTotalPrice, getTotalQuantity, updateCartItemQuantity, removeFromCart } = useCart();
  const [shippingOption, setShippingOption] = useState('normal');
  const [totalWithShipping, setTotalWithShipping] = useState(0);

  const FREE_SHIPPING_THRESHOLD = 55;
  const NORMAL_SHIPPING_COST = 5;
  const EXPEDITED_SHIPPING_COST = 10;

  const handleQuantityChange = (item, amount) => {
    if (item.quantity + amount > 0) {
      updateCartItemQuantity(item._id, item.quantity + amount);
    } else {
      removeFromCart(item._id);
    }
  };

  useEffect(() => {
    const subtotal = getTotalPrice();
    let shippingCost = 0;

    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingCost = shippingOption === 'normal' ? 0 : 5;
    } else {
      shippingCost = shippingOption === 'normal' ? NORMAL_SHIPPING_COST : EXPEDITED_SHIPPING_COST;
    }

    setTotalWithShipping(subtotal + shippingCost);
  }, [cartItems, shippingOption, getTotalPrice]);

  return (
    <div className="container mx-auto px-4 pt-12 pb-20 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map(item => (
          <div key={item._id} className="flex items-center gap-4 border-b pb-4">
            <Link to={`/discs/${item._id}`} className="">
              <img src={item.photo} alt={item.disc.name} className="w-24 h-24 object-cover sm:h-36 sm:w-36 md:h-48 md:w-48" />
            </Link>  
            <div className="flex-grow">
              <Link to={`/discs/${item._id}`} className="">
                <h2 className="text-xl">{item.plastic} {item.disc.name}</h2>
              </Link>    
              <p>Color: {item.color}</p>
              <p>Plastic: {item.plastic}</p>
              <p>Weight: {item.weight}g</p>
              <div className="flex items-center gap-2">
                <button onClick={() => handleQuantityChange(item, -1)} className="px-2 py-1 bg-white rounded border border-black">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item, 1)} className="px-2 py-1 bg-white rounded border border-black">+</button>
              </div>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
            <div className="text-right">
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <p>Total Quantity: {getTotalQuantity()}</p>
          <p>Subtotal: ${getTotalPrice().toFixed(2)}</p>
          
          <div className="mt-4">
            <h3 className="font-bold">Shipping Options:</h3>
            <div>
              <input 
                type="radio" 
                id="normal" 
                name="shipping" 
                value="normal" 
                checked={shippingOption === 'normal'} 
                onChange={() => setShippingOption('normal')}
              />
              <label htmlFor="normal"> Normal Shipping ({getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? 'Free' : `$${NORMAL_SHIPPING_COST}`})</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="expedited" 
                name="shipping" 
                value="expedited" 
                checked={shippingOption === 'expedited'} 
                onChange={() => setShippingOption('expedited')}
              />
              <label htmlFor="expedited"> Expedited Shipping ({getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? '$5' : `$${EXPEDITED_SHIPPING_COST}`})</label>
            </div>
          </div>
          
          <p className="mt-4 font-bold">Total with Shipping: {(totalWithShipping).toFixed(2)} </p>
          
          {getTotalPrice() < FREE_SHIPPING_THRESHOLD && (
            <p className="mt-2 text-sm text-gray-600">
              Add ${(FREE_SHIPPING_THRESHOLD - getTotalPrice()).toFixed(2)} more to your cart for free shipping!
            </p>
          )}
        </div>
        
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end items-start">
          <Link to="/checkout" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

// import React from 'react';
// import { useCart } from '../contexts/CartContext';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const { cartItems, getTotalPrice, getTotalQuantity, updateCartItemQuantity, removeFromCart } = useCart();

//   const handleQuantityChange = (item, amount) => {
//     if (item.quantity + amount > 0) {
//       updateCartItemQuantity(item._id, item.quantity + amount);
//     } else {
//       removeFromCart(item._id);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       <div className="flex flex-col gap-4">
//         {cartItems.map(item => (
//           <div key={item._id} className="flex items-center gap-4 border-b pb-4">
//             <Link to={`/discs/${item._id}`} className="">
//               <img src={item.photo} alt={item.disc.name} className="w-24 h-24 object-cover" />
//             </Link>  
//             <div className="flex-grow">
//               <Link to={`/discs/${item._id}`} className="">
//                 <h2 className="text-xl">{item.plastic} {item.disc.name}</h2>
//               </Link>    
//               <p>Color: {item.color}</p>
//               <p>Plastic: {item.plastic}</p>
//               <p>Weight: {item.weight}g</p>
//               <div className="flex items-center gap-2">
//                 <button onClick={() => handleQuantityChange(item, -1)} className="px-2 py-1 bg-gray-200">-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => handleQuantityChange(item, 1)} className="px-2 py-1 bg-gray-200">+</button>
//               </div>
//               <p>Price: ${item.price}</p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="px-2 py-1 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             </div>
//             <div className="text-right">
//               <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8">
//         <h2 className="text-xl font-bold">Cart Summary</h2>
//         <p>Total Quantity: {getTotalQuantity()}</p>
//         <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartPage;