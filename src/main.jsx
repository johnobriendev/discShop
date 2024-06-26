import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import HomePage from './components/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discs from './components/Discs.jsx';




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
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </React.StrictMode>,
)
