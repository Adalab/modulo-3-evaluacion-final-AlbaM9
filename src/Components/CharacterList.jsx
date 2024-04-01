import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from "./CharacterCard";
import '../scss/CharacterList.scss';

function CharacterList({ characters }) {

    const sortedCharacters = characters.sort((a, b) => a.name.localeCompare(b.name));

    const characterLinks = sortedCharacters.map((character) => (
        <NavLink className="Link" key={character.id} to={`/characters/${character.id}`}>
            <CharacterCard character={character} />
        </NavLink>
    ));

    return (
        <div className="CharacterList">
            {characterLinks}
        </div>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.array,

};
export default CharacterList;
