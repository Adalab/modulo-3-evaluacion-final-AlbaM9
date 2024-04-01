import PropTypes from 'prop-types';
import '../scss/CharacterCard.scss';

function CharacterCard({ character }) {

    return (
        <div className="Character" key={character.id}>
            <img src={character.image} alt="" />
            <h3>{character.name}</h3>
            <p> {character.species}</p>
        </div>
    )
}

CharacterCard.propTypes = {
    character: PropTypes.object,
};

export default CharacterCard