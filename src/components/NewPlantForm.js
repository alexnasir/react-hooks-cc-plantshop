import React, { useState } from "react";

const NewPlantForm = ({ addPlant }) => {
  const [soldOut, setSoldOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Manually extract values from the form
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const newPlant = { name, price, image, sold_out: soldOut };

    // POST the new plant to the backend and then add it to the state
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => addPlant(data));

    // Reset the form after submission
    form.reset();
    setSoldOut(false);  // Reset soldOut state
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <label>
          Sold Out:
          <input
            type="checkbox"
            checked={soldOut}
            onChange={() => setSoldOut(!soldOut)}
          />
        </label>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default NewPlantForm;
