import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => setAnimals([...animals, getRandomAnimal()]);

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderAnimals}</div>
    </div>
  );
}

export default App;
