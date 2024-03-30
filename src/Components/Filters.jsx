import React, { useState, useEffect } from 'react';
import '../scss/Filters.scss';

function Filters({ characters, setFilteredCharacters, setNotFound }) {
    const [inputData, setInputData] = useState(localStorage.getItem('inputData') || "");
    const [speciesFilters, setSpeciesFilters] = useState(JSON.parse(localStorage.getItem('speciesFilters')) || []);

    useEffect(() => {
        localStorage.setItem('inputData', inputData);
        localStorage.setItem('speciesFilters', JSON.stringify(speciesFilters));

        const filterCharacters = () => {
            let filtered = characters;

            if (inputData) {
                filtered = filtered.filter(character =>
                    typeof character.name === 'string' &&
                    character.name.toLowerCase().includes(inputData.toLowerCase())
                );
                
            }
            if (speciesFilters.length > 0) {
                filtered = filtered.filter(character =>
                    speciesFilters.includes(character.species.toLowerCase())
                );
            }

            setFilteredCharacters(filtered);
            setNotFound(filtered.length === 0); 
        };
        
        filterCharacters();
    }, [characters, inputData, speciesFilters, setFilteredCharacters, setNotFound]);

    const handleInputSearch = (event) => {
        setInputData(event.target.value);
    }  
    
    const handleSpeciesFilter = (event) => {
        const { id, checked } = event.target;
        setSpeciesFilters(prevFilters => checked ? [...prevFilters, id] : prevFilters.filter(filter => filter !== id));
    };
    
    return (
        <form className='filters'>
            <input type="text" onChange={handleInputSearch} placeholder='Search character...' value={inputData} />
            <div className='filters_checkbox'>
                <div>
                    <label htmlFor="human">Human 👨‍🚀</label>
                    <input
                        type="checkbox"
                        id="human"
                        onChange={handleSpeciesFilter}
                        checked={speciesFilters.includes('human')}
                    />
                </div>
                <div>
                    <label htmlFor="alien">Alien 👽</label>
                    <input
                        type="checkbox"
                        id="alien"
                        onChange={handleSpeciesFilter}
                        checked={speciesFilters.includes('alien')}
                    />
                </div>
            </div>
        </form>
    )
}

export default Filters;
