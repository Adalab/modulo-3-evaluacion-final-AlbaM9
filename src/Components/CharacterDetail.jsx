import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../scss/CharacterDetail.scss';


function CharacterDetail({ characters }) {
    const { id } = useParams();
    const character = characters.find((char) => char.id === parseInt(id));
    let status;
    let specie;

    switch (character.status) {
        case "Alive":
            status = "😊";
            break;
        case "Dead":
            status = "💀";
            break;
        default:
            status = "🤷‍♂️";
    }
    character.species === "Human" ? specie = "👨‍🚀" : specie = "👽";

    return (
        <>
            <NavLink to={`/`} className='Link'>
                <h4>Volver</h4>
            </NavLink >
            <div className="CharacterDetail" key={character.id}>
                <img src={character.image} alt="" />
                <div className='text'>
                    <h3>{character.name}</h3>
                    <p> Specie: {specie}</p>
                    <p> Origin: {character.origin.name}</p>
                    <p> Episodes: {character.episode.length}</p>
                    <p> Status: {status}</p>
                </div>
            </div>
        </>
    )
}

export default CharacterDetail