import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import logoRM from '../images/R&MLogo.png';
import '../scss/App.scss';

function App() {

  const [characters, setCharacters] = useState([{}]);
  const [inputData, setInputData] = useState("");

  const handleinputSeach = (event) => {
    setInputData(event.target.value);
  }
  return (
    <>
      <header>
        <img src={logoRM} alt="R&M Logo" className='HeaderImg' />
      </header>
      <main>
        <nav>
          <input type="text" onChange={handleinputSeach} placeholder='Search character...' />
        </nav>
        <section className='CharactersSection'>
          <Filters inputData={inputData} characters={characters} setCharacters={setCharacters} />
        </section>

      </main>
    </>
  )
}

export default App
