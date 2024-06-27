import React from 'react';
import { useCart } from '../contexts/CartContext';
const CartPage = () => {
  const { cartItems, getTotalPrice, getTotalQuantity } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map(item => (
          <div key={item._id} className="flex items-center gap-4 border-b pb-4">
            <img src={item.photo} alt={item.disc.name} className="w-16 h-16 object-cover" />
            <div className="flex-grow">
              <h2 className="text-xl">{item.plastic} {item.disc.name}</h2>
              <p>Color: {item.color}</p>
              <p>Plastic: {item.plastic}</p>
              <p>Weight: {item.weight}g</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
            <div className="text-right">
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Cart Summary</h2>
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;