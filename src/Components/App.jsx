import { useState } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import logoRM from '../images/R&MLogo.png';
import '../scss/App.scss';

function App() {

  return (
    <>
      <header>
        <img src={logoRM} alt="R&M Logo" className='HeaderImg' />
      </header>
      <main>
        <nav>
          <input type="text" />
        </nav>
        <section className='CharactersSection'>

          <CharacterList />

        </section>

      </main>
    </>
  )
}

export default App
