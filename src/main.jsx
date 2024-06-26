import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './components/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discs from './components/Discs.jsx';
import CartPage from './components/CartPage.jsx'
import { CartProvider } from './contexts/CartContext.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/discs',
        element: <Discs />,
     },
     {
      path: '/cart',
      element: <CartPage />,
   },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router}>
      
        <App />
    
    </RouterProvider>
    </CartProvider>
  </React.StrictMode>,
);
