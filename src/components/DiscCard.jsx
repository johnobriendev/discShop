import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const DiscCard = ({ disc }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(disc, 1);
  };

  
  
  return (
    <div className="my-4 flex flex-col items-center">
      <Link to={`/discs/${disc._id}`} className="block hover:scale-105 mb-5">
      <img className='w-[260px]' src={disc.photo} alt={disc.disc.name} />
      </Link>
      <Link to={`/discs/${disc._id}`} className="block hover:scale-105">
        <h3 className='text-2xl font-bold'>{disc.plastic} {disc.disc.name}</h3>
      </Link>  
      
      <p>Color: {disc.color}</p>
      <p>Plastic: {disc.plastic}</p>
      <p>Weight: {disc.weight}g</p>
      <p>Price: ${disc.price}</p>
      <button className='border border-black rounded p-2 hover:bg-white' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DiscCard;
