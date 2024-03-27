import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../scss/CharacterDetail.scss';


function CharacterDetail({ characters }) {
    const { id } = useParams();
    const character = characters.find((char) => char.id === parseInt(id));

    return (
        <>
            <Link to={`/`} className='Link'>
                <h4>Volver</h4>
            </Link >
            <div className="CharacterDetail" key={character.id}>
                <img src={character.image} alt="" />
                <div className='text'>
                    <h3>{character.name}</h3>
                    <p> Specie: {character.species}</p>
                    <p> Origin: {character.origin.name}</p>
                    <p> Episodes: {character.episode.length}</p>
                    <p> Status: {character.status}</p>
                </div>
            </div>
        </>
    )
}

export default CharacterDetail