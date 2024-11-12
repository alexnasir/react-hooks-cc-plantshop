import React from 'react';

const PlantCard = ({ plant, markSoldOut }) => {
  const { name, price, image, sold_out } = plant;

  return (
    <div className={`plant-card ${sold_out ? 'sold-out' : ''}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button
        onClick={() => markSoldOut(plant.id)}
        disabled={sold_out}
      >
        {sold_out ? 'Sold Out' : 'Mark as Sold Out'}
      </button>
    </div>
  );
};

export default PlantCard;
