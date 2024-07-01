import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import getDiscs from '../services/fetch'; // Assuming this fetches all discs

const DiscDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [disc, setDisc] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = () => {
    addToCart({ ...disc, quantity });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{disc.disc.name}</h1>
      <img src={disc.photo} alt={disc.disc.name} className="w-64 h-64 object-cover mb-4" />
      <p>Color: {disc.color}</p>
      <p>Plastic: {disc.plastic}</p>
      <p>Weight: {disc.weight}g</p>
      <p>Price: ${disc.price}</p>
      <div className="flex items-center mt-4">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border p-2 mr-4 w-16"
        />
        <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DiscDetail;
