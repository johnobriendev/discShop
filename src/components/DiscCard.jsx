import React from 'react';

const DiscCard = ({ disc }) => {
  return (
    <div className="">
      <img src={disc.photo} alt={disc.disc.name} />
      <h3>{disc.disc.name}</h3>
      <p>Color: {disc.color}</p>
      <p>Plastic: {disc.plastic}</p>
      <p>Weight: {disc.weight}g</p>
      <p>Price: ${disc.price}</p>
    </div>
  );
};

export default DiscCard;
