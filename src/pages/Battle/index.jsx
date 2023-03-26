import { Grid } from "@mui/material";
import PokemonCard from "../../components/PokemonCard";
import BattleText from "../../components/BattleText";
import MoveSelect from "../../components/MoveSelect";
import testData from "../../testData.json";

function Battle() {
    //TODO: Determine which card is selected, set its selectedProp
    return (
        <Grid container height="100%">
            <Grid item xs={12} height="75%">
                <Grid container height="100%">
                    <Grid item xs={4} height="30%">
                        <PokemonCard pokemon={testData.pokemonList[0]} selected />
                    </Grid>
                    <Grid item xs={4} height="30%">
                        <PokemonCard pokemon={testData.pokemonList[1]} />
                    </Grid>
                    <Grid item xs={4} height="30%">
                        <PokemonCard pokemon={testData.pokemonList[2]} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8} height="25%">
                <BattleText />
            </Grid>
            <Grid item xs={4} height="25%">
                <MoveSelect />
            </Grid>
        </Grid>
    );
}

export default Battle;
