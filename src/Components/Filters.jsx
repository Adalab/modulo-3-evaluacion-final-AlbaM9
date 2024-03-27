import React, { useState, useEffect } from 'react';

function Filters({ characters, setFilteredCharacters }) {
    const [inputData, setInputData] = useState("");


    useEffect(() => {
        setFilteredCharacters(characters);
    }, [characters]);

    useEffect(() => {
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

    const handleInputSearch = (event) => {
        setInputData(event.target.value);
    }
    return (
        <input type="text" onChange={handleInputSearch} placeholder='Search character...' />
    )
}

export default Filters