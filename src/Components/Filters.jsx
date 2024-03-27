import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList'

function Filters({ characters, setCharacters, inputData, }) {

    const [filteredCharacters, setFilteredCharacters] = useState(characters);
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


        const filterCharacters = () => {
            if (!inputData) {
                setFilteredCharacters(characters);
            } else {
                const filtered = characters.filter(character =>
                    character.name.toLowerCase().includes(inputData.toLowerCase())
                );
                setFilteredCharacters(filtered);
            }
        };

        filterCharacters();

    }, [characters, inputData]);

    return (<CharacterList characters={filteredCharacters} setCharacters={setCharacters} />)


}

export default Filters