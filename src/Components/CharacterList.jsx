import { NavLink } from 'react-router-dom';
import CharacterCard from "./CharacterCard"

import '../scss/CharacterList.scss';

function CharacterList({ characters }) {
    return (

        
        <div className="CharacterList">
            {characters
                .sort((name, nameComp) => name.name.localeCompare(nameComp.name))
                .map((character) => (
                    <NavLink className="Link" key={character.id} to={`/characters/${character.id}`}>
                        <CharacterCard character={character} />
                    </NavLink>
                ))}
        </div>
    )
}
export default CharacterList