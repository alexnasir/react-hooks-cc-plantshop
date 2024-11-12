import React from 'react';
import PlantCard from './PlantCard';

const PlantList = ({ plants, markSoldOut }) => {
  return (
    <div>
      <h2>Available Plants</h2>
      <div className="plant-list">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            markSoldOut={markSoldOut}
          />
        ))}
      </div>
    </div>
  );
};

export default PlantList;
