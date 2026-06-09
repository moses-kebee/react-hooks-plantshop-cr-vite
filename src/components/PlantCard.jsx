import React from 'react';

function PlantCard({ plant, onToggleStock }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>        {/* ← NO $ sign */}
      <button 
        className={plant.inStock ? "primary" : ""}
        onClick={() => onToggleStock(plant.id, plant.inStock)}
      >
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;