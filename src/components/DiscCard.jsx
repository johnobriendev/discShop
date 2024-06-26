import React from 'react';
import { useCart } from '../contexts/CartContext';


const DiscCard = ({ disc }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(disc);
  };

  
  
  return (
    <div className="">
      <img className='w-[300px]' src={disc.photo} alt={disc.disc.name} />
      <h3>{disc.disc.name}</h3>
      <p>Color: {disc.color}</p>
      <p>Plastic: {disc.plastic}</p>
      <p>Weight: {disc.weight}g</p>
      <p>Price: ${disc.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DiscCard;
