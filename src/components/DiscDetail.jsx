import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import getDiscs from '../services/fetch'; // Assuming this fetches all discs

const DiscDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [disc, setDisc] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisc = async () => {
      try {
        const data = await getDiscs(); // Fetch all discs
        const disc = data.find(disc => disc._id === id); // Find the disc by id
        setDisc(disc);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDisc();
  }, [id]);

  if (!disc) {
    return <div>Loading...</div>;
  }
  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };

  const handleAddToCart = () => {
    addToCart(disc, quantity);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-2xl font-medium mb-4">{disc.plastic} {disc.disc.name}</h1>
      <img src={disc.photo} alt={disc.disc.name} className="w-64 h-64 object-cover mb-4" />
      <p>Color: {disc.color}</p>
      <p>Plastic: {disc.plastic}</p>
      <p>Weight: {disc.weight}g</p>
      <p>Price: ${disc.price}</p>
      <div className="flex items-center gap-4 my-6">
        <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 bg-gray-200">-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 bg-gray-200">+</button>
      </div>
      <button className='border border-black rounded p-2 mt-2' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DiscDetail;
