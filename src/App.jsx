import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
// import ShopPage from './components/ShopPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/shop',
    element: <ShopPage addToCart={addToCart} />,
  },
])


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
