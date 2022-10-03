import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const handleNameChange = (Event) => setName(Event.target.value);
  const handleBreedChange = (Event) => setBreed(Event.target.value);
  const handleAgeChange = (Event) => setAge(Event.target.value);

  const handleSubmit = (Event) => {
    Event.preventDefault();
    console.log("Submitted:", name, breed, age);
    setName("");
    setBreed("");
    setAge("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input 
        type="text" 
        id="name" 
        name="name" 
        onChange={handleNameChange}
        value={name} 
        />
      </label>
      <label htmlFor="breed">
        Breed:
        <input
          type="text"
          id="breed"
          name="breed"
          onChange={handleBreedChange}
          value={breed}
        />
      </label>
      <label htmlFor="age">
        Age:
        <input 
        type="text" 
        id="age" 
        name="age" 
        onChange={handleAgeChange}
        value={age} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DogForm;
