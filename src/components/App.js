import React, { useState, useEffect } from 'react';
import Header from './Header';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

const App = () => {
  // State for plants and search term
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all plants from backend when the app starts
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Function to handle adding a new plant
  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Function to mark a plant as sold out
  const markSoldOut = (plantId) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId ? { ...plant, sold_out: true } : plant
      )
    );
  };

  // Filter plants by search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm addPlant={addPlant} />
      <PlantList plants={filteredPlants} markSoldOut={markSoldOut} />
    </div>
  );
};

export default App;
