
import CharacterCard from "./CharacterCard"
import CharacterDetail from "./CharacterDetail";
import '../scss/CharacterList.scss';


function CharacterList({ characters, }) {

    return (
        <>
            {/*<div className="CharacterList">
                {characters.map(character => (
                    <CharacterCard character={character} />))}

                </div>*/}

            {<>
                <p className="back"> Volver </p>
                <div className="DetailSection" >
                    {characters.map(character => (
                        <CharacterDetail character={character} />))}

                </div>
            </>}
        </>
    )
}
export default CharacterList