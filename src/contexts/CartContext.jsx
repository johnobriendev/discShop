import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (disc) => {
  //   setCartItems([...cartItems, disc]);
  // };

  const addToCart = (disc) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item._id === disc._id);
      if (existingItem) {
        return prevItems.map(item => 
          item._id === disc._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...disc, quantity: 1 }];
    });
  };

  const removeFromCart = (discId) => {
    setCartItems(cartItems.filter(item => item._id !== discId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
