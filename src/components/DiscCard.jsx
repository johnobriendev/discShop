import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const DiscCard = ({ disc }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(disc);
  };

  
  
  return (
    <div className="my-4">
      <img className='w-[300px]' src={disc.photo} alt={disc.disc.name} />
     
      <Link to={`/discs/${disc._id}`} className="block">
        <h3 className='text-xl'>{disc.plastic} {disc.disc.name}</h3>
      </Link>  
      
      <p>Color: {disc.color}</p>
      <p>Plastic: {disc.plastic}</p>
      <p>Weight: {disc.weight}g</p>
      <p>Price: ${disc.price}</p>
      <button className='border border-black rounded p-1' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DiscCard;
