import testData from "../testData.json";
import damageCalculation from "../utils/damageCalculation";

const tempPage = () => {
    return (
        <div>
            <p>Well here we are...</p>
            <button onClick={() => damageCalculation(testData.pokemonList[0], testData.pokemonList[2], testData.moveList[0])}>Fire attacking Grass</button>
            <button onClick={() => damageCalculation(testData.pokemonList[0], testData.pokemonList[1], testData.moveList[0])}>Fire attacking Water</button>
        </div>
    );
};

export default tempPage;
