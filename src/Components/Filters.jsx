import React, { useState, useEffect } from 'react';
import '../scss/Filters.scss';

function Filters({ characters, setFilteredCharacters, setNotFound }) {

    const [inputData, setInputData] = useState(localStorage.getItem('inputData') || "");
    const [filterBySpecie, setFilterBySpecie] = useState(JSON.parse(localStorage.getItem('filterBySpecie')) || []);

    useEffect(() => {
        localStorage.setItem('inputData', inputData);
        localStorage.setItem('filterBySpecie', JSON.stringify(filterBySpecie));

        const filterCharacters = () => {
            let filtered = characters;

            if (inputData) {
                filtered = filtered.filter(character =>
                    typeof character.name === 'string' &&
                    character.name.toLowerCase().includes(inputData.toLowerCase())
                );

            }
            if (filterBySpecie.length > 0) {
                filtered = filtered.filter(character =>
                    filterBySpecie.includes(character.species.toLowerCase())
                );
            }

            setFilteredCharacters(filtered);
            setNotFound(filtered.length === 0);
        };

        filterCharacters();
    }, [characters, inputData, filterBySpecie, setFilteredCharacters, setNotFound]);

    const handleInputSearch = (event) => {
        setInputData(event.target.value);
    }

    const handleFilterBySpecie = (event) => {
        const { id, checked } = event.target;
        setFilterBySpecie(prevFilters => checked ? [...prevFilters, id] : prevFilters.filter(filter => filter !== id));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <>
            <h4>Search your favourites Characters!</h4>
            <form className='filters'>
                <input
                    type="text"
                    onChange={handleInputSearch}
                    onKeyDown={handleKeyDown}
                    placeholder='Name...'
                    value={inputData} />

                <div className='filters_checkbox'>
                    <div>
                        <label htmlFor="human">Human 👨‍🚀</label>
                        <input
                            type="checkbox"
                            id="human"
                            onChange={handleFilterBySpecie}
                            checked={filterBySpecie.includes('human')}
                        />
                    </div>
                    <div>

                        <label htmlFor="alien">Alien 👽</label>
                        <input
                            type="checkbox"
                            id="alien"
                            onChange={handleFilterBySpecie}
                            checked={filterBySpecie.includes('alien')}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Filters;
