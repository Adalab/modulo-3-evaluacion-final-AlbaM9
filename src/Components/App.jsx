import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filters from './Filters';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import logoRM from '../images/R&MLogo.png';
import '../scss/App.scss';

function App() {

  const [characters, setCharacters] = useState([{}]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [notFound, setNotFound] = useState(false);


  useEffect(() => {

    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        return response.json();
      })
      .then(data => {
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
        <section className='CharactersSection'>
          <Routes>
            <Route path="/" element={
              <>
                <Filters
                  characters={characters}
                  setFilteredCharacters={setFilteredCharacters} setNotFound={setNotFound} />

                <CharacterList
                  characters={filteredCharacters} />

                {notFound && <p>No results found</p>}
              </>
            } />
            <Route path="/characters/:id" element={<CharacterDetail characters={characters} />} />
          </Routes>

        </section>
      </main>
    </>

  )
}

App.propTypes = {
  characters: PropTypes.array,
  filteredCharacters: PropTypes.array,
  setFilteredCharacters: PropTypes.func,
  setNotFound: PropTypes.func
};

export default App
