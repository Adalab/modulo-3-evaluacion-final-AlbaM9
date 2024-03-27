import { useEffect } from "react";
import CharacterCard from "./CharacterCard"

import '../scss/CharacterList.scss';



function CharacterList({ characters, setCharacters, }) {

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
            <div className="CharacterList">
                {characters.map(character => (
                    <CharacterCard character={character} />))}

            </div>


        </>
    )
}

export default CharacterList