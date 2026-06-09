import React from 'react';

function PlantCard({ plant, onToggleStock }) {
  const handleToggle = () => {
    onToggleStock(plant.id, plant.inStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button 
        className={plant.inStock ? "primary" : ""}
        onClick={handleToggle}
      >
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;