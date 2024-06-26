import React from 'react';

const DiscCard = ({ disc }) => {
  return (
    <div className="disc-card">
      <img src={disc.photo} alt={disc.name} />
      <h3>{disc.name}</h3>
      <p>Color: {disc.color}</p>
      <p>Weight: {disc.weight}g</p>
      <p>Price: ${disc.price}</p>
    </div>
  );
};

export default DiscCard;
