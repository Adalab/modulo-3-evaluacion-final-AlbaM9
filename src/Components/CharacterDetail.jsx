import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../scss/CharacterDetail.scss';

function CharacterDetail({ characters }) {
    const { id } = useParams();
    const [IdCharacter, setIdCharacter] = useState(null);
    const [NotFoundMsg, setNotFoundMsg] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const foundCharacter = characters.find(char => char.id === parseInt(id));
            if (foundCharacter) {
                setIdCharacter(foundCharacter);
            } else {
                setNotFoundMsg(true);
            }
        }, 300);
        return () => clearTimeout(timer);

    }, [id, characters]);

    if (!IdCharacter) {
        return (
            <h4>Cargando..</h4>
        );
    }

    if (NotFoundMsg) {
        return (
            <h4>No se ha encontrado el personaje, por favor vuelva a intentarlo.</h4>
        );
    }

    let status;
    let specie;

    switch (IdCharacter.status) {
        case "Alive":
            status = "😊";
            break;
        case "Dead":
            status = "💀";
            break;
        default:
            status = "🤷‍♂️";
    }

    IdCharacter.species === "Human" ? specie = "👨‍🚀" : specie = "👽";

    return (
        <>
            <NavLink to={`/`} className='Link'>
                <h4>Back</h4>
            </NavLink>
            <div className="CharacterDetail" key={IdCharacter.id}>
                <img src={IdCharacter.image} alt="" />
                <div className='text'>
                    <h3>{IdCharacter.name}</h3>
                    <p> Specie: {specie}</p>
                    <p> Origin: {IdCharacter.origin.name}</p>
                    <p> Episodes: {IdCharacter.episode.length}</p>
                    <p> Status: {status}</p>
                </div>
            </div>
        </>
    );
}

export default CharacterDetail;
