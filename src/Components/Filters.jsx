import React, { useState, useEffect } from 'react';
import '../scss/Filters.scss';

function Filters({ characters, setFilteredCharacters, setNotFound }) {
    const [inputData, setInputData] = useState("");
    const [speciesFilters, setSpeciesFilters] = useState([]);
   

    useEffect(() => {
        const filterCharacters = () => {
            let filtered = characters;

            // Filtrar por nombre
            if (inputData) {
                filtered = filtered.filter(character =>
                    character.name.toLowerCase().includes(inputData.toLowerCase())
                );
            }

            // Filtrar por especie
            if (speciesFilters.length > 0) {
                filtered = filtered.filter(character =>
                    speciesFilters.includes(character.species.toLowerCase())
                );
            }

            setFilteredCharacters(filtered);
            setNotFound(filtered.length === 0); 
        };
        
        filterCharacters();
    }, [characters, inputData, speciesFilters, setFilteredCharacters]);

    const handleInputSearch = (event) => {
        setInputData(event.target.value);
    }  
    
    const handleSpeciesFilter = (event) => {
        const { id, checked } = event.target;
        let updatedFilters = [...speciesFilters];
        if (checked) {
            updatedFilters.push(id);
        } else {
            updatedFilters = updatedFilters.filter(filter => filter !== id);
        }
        setSpeciesFilters(updatedFilters);
    };
    
    return (
        <form className='filters'>
            <input type="text" onChange={handleInputSearch} placeholder='Search character...' />
            <div className='filters_checkbox'>
                <div>
                <label htmlFor="human">Human 👨‍🚀</label>
                    <input
                    type="checkbox"
                    id="human"
                    onChange={handleSpeciesFilter}
                    checked={speciesFilters.includes('human')}/>
                
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
