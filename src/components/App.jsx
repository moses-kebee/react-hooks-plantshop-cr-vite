import React, { useState, useEffect } from 'react';
import PlantPage from './PlantPage';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  const handleAddPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(data => setPlants([...plants, data]));
  };

  const handleToggleStock = (id, currentStatus) => {
    const newStatus = !currentStatus;
    
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inStock: newStatus })
    })
      .then(res => res.json())
      .then(updatedPlant => {
        const updatedPlants = plants.map(plant =>
          plant.id === updatedPlant.id ? updatedPlant : plant
        );
        setPlants(updatedPlants);
      });
  };

  return (
    <div className="app">
      <PlantPage 
        plants={plants}
        onAddPlant={handleAddPlant}
        onToggleStock={handleToggleStock}
      />
    </div>
  );
}

export default App;