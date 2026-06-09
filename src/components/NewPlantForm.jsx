import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPlant = {
      name: name,
      image: image,
      price: price    // ← Keep as string, don't convert to Number
      // ← DO NOT include inStock property
    };
    
    onAddPlant(newPlant);
    
    setName('');
    setImage('');
    setPrice('');
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Plant name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="image"
          placeholder="Image URL"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          name="price"
          placeholder="Price"
          step="0.01"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;