import '../scss/CharacterCard.scss';

function CharacterCard({ character }) {

    const handleClick = () => {
        console.log(character.id); // Pasar el ID del personaje al hacer clic
    };

    return (
        <div className="Character" onClick={handleClick} key={character.id}>
            <img src={character.image} alt="" />
            <h3>{character.name}</h3>
            <p> {character.species}</p>
        </div>
    )
}
export default CharacterCard