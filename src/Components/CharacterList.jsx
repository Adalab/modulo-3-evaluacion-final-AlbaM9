
import CharacterCard from "./CharacterCard"
import '../scss/CharacterList.scss';


function CharacterList({ characters, }) {

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