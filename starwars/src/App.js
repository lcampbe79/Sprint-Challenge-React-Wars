import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard.js';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState();

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      //console.log('Here is character info: ',response)
      setCharacters(response.data.results)
    })
    .catch(error => console.log('There was an error: ', error))
  }, [])

  
  console.log('Character info: ', characters)
  if (!characters)  return <div className='Loading'>Loading.....</div> 
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="CardContainer">
      {
        characters.map(character =>
          <CharacterCard key={character.name} character={character} />
        )
      }
      </div>
    </div>
  );
}

export default App;
