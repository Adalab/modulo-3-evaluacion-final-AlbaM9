import '../scss/CharacterDetail.scss';


function CharacterDetail({ character }) {
    const handleClick = () => {
        console.log(character.id); // Pasar el ID del personaje al hacer clic
    };

    return (
        <div className="CharacterDetail" onClick={handleClick} key={character.id}>
            <img src={character.image} alt="" />
            <div className='text'>
                <h3>{character.name}</h3>
                <p> Specie: {character.species}</p>
                <p> Origin: {character.origin.name}</p>
                <p> Episodes: {character.episode.length}</p>
                <p> Status: {character.status}</p>
            </div>
        </div>
    )
}

export default CharacterDetail