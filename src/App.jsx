import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { useState } from "react";
import { Outlet } from 'react-router-dom'





function App() {




  return (
    <div>
      <Navbar />
      <Outlet />
      
    </div>
     
      
    
  )
}

export default App
