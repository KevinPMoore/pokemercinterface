import { Grid } from "@mui/material";
import testData from "../testData.json";
import damageCalculation from "../utils/damageCalculation";
import BattleText from "../components/BattleText";

const tempPage = () => {
    return (
        <Grid container className="whole-grid" height="100%">
            <Grid item xs={12} height="75%">
                <div>
                    <p>Well here we are...</p>
                    <button onClick={() => damageCalculation(testData.pokemonList[0], testData.pokemonList[2], testData.moveList[0])}>Fire attacking Grass</button>
                    <button onClick={() => damageCalculation(testData.pokemonList[0], testData.pokemonList[1], testData.moveList[0])}>Fire attacking Water</button>
                </div>
            </Grid>
            <Grid item xs={12} height="25%">
                <BattleText />
            </Grid>
        </Grid>
    );
};

export default tempPage;
