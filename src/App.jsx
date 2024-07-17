import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useCart } from './contexts/CartContext';





function App() {
  const { getTotalQuantity} = useCart();
  const [cartCount, setCartCount] = useState(0);

  // Update cart count whenever cartItems change
  useEffect(() => {
    setCartCount(getTotalQuantity);
  }, [getTotalQuantity]);
  
  
  return (
    <div className="font-monserrat bg-slate-200">
     
      <Navbar cartCount={cartCount} />
      <div className="pt-24">   <Outlet /></div>
   
     
    </div>  
  )
}

export default App
