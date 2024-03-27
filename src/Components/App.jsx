import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import logoRM from '../images/R&MLogo.png';
import '../scss/App.scss';

function App() {

  const [characters, setCharacters] = useState([{}]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);



  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.results);
        setCharacters(data.results);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <>
      <header>
        <img src={logoRM} alt="R&M Logo" className='HeaderImg' />
      </header>
      <main>

        <Filters characters={characters} setFilteredCharacters={setFilteredCharacters} />

        <section className='CharactersSection'>
          <Routes>
            <Route path="/" element={<CharacterList characters={filteredCharacters} />} />
            <Route path="/characters/:id" element={<CharacterDetail characters={characters} />} />
          </Routes>
        </section>
      </main>
    </>

  )
}

export default App
