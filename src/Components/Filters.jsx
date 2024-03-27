import React from 'react'
import CharacterList from './CharacterList'

function Filters({ characters, setCharacters }) {
    return (<CharacterList characters={characters} setCharacters={setCharacters} />)


}

export default Filters