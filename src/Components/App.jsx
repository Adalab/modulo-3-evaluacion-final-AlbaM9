import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import logoRM from '../images/R&MLogo.png';
import '../scss/App.scss';

function App() {

  const [characters, setCharacters] = useState([{}]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);

      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchData();

  }, []);

  return (
    <>
      <header>
        <img src={logoRM} alt="R&M Logo" className='HeaderImg' />
      </header>
      <main>
        <nav>
          <Filters characters={characters} setFilteredCharacters={setFilteredCharacters} />
        </nav>
        <section className='CharactersSection'>
          <CharacterList characters={filteredCharacters} setCharacters={setCharacters} />
        </section>

      </main>
    </>
  )
}

export default App
