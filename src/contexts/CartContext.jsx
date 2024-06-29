import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

// Get cart data from local storage
const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

// Set cart data to local storage
const setCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage());

  useEffect(() => {
    setCartToLocalStorage(cartItems);
  }, [cartItems]);

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

  // const updateItemQuantity = (discId, quantity) => {
  //   setCartItems(cartItems.map(item =>
  //     item._id === discId ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
  //   ));
  // };
  const updateCartItemQuantity = (discId, quantity) => {
    setCartItems(cartItems.map(item =>
      item._id === discId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, removeFromCart, clearCart, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
