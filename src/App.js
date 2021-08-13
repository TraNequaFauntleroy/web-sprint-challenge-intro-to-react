import React from 'react';
import './App.css';
import Character from './components/Character'
import Details from './components/Details'
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null)
  const [error, setError] = useState(null)

  const openDetails = id => {
    setCurrentCharacter(id)
  }

  const closeDetails = () => {
    setCurrentCharacter(null);
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(res => {
    console.log(res.data)
    setCharacters(res.data)
  })
  .catch(error => {
    setError('Sorry, we are working on this!')
  })
 }, [])

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <h1 className="Header">React Wars ></h1>
      {
        characters && characters.map(char => {
          return <Character key={char.id} info={char} openDetails={openDetails}/>
        })
      }
      {
        currentCharacter && <Details charName={currentCharacter} closeDetails={closeDetails} />
      }
    </div>
  );
}

export default App;
