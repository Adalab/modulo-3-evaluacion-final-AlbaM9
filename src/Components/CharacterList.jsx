import { Link } from 'react-router-dom';
import CharacterCard from "./CharacterCard"

import '../scss/CharacterList.scss';


function CharacterList({ characters }) {

    return (

        <div className="CharacterList">
            {characters.map((character) => (
                <Link className="Link" key={character.id} to={`/characters/${character.id}`}>
                    <CharacterCard character={character} />
                </Link>
            ))}
        </div>


    )
}
export default CharacterList