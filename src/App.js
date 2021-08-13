import React from 'react';
import './App.css';
//import data and hooks
import { useEffect, useState } from 'react';
import axios from 'axios';
//import component files
import Character from './components/Character'
import Details from './components/Details'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null)


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
    <div className= 'total'>
      <h1>REACT WARS > </h1>
      <div className='container'>
      <div className="App">
      {error && <h1>{error}</h1>}
      {
        characters && characters.map(char => {
          return <Character key={char.id} info={char}/>
        })
      }
      </div>
    </div>
  </div>
    
  );
}

export default App;
