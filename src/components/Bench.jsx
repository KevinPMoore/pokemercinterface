import { useState } from "react";
import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";

function Bench({ pokemonList }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const cardWidth = 12 / pokemonList.length;
    const team = pokemonList.map(pokemon => {
        return (
            <Grid item xs={cardWidth} key={pokemon.id}>
                <PokemonCard pokemon={pokemon} index={pokemonList.indexOf(pokemon)} selected={selectedIndex === pokemonList.indexOf(pokemon)} setSelectedIndex={setSelectedIndex} />
            </Grid>
        );
    });

    return (
        <Grid container height="100%" justifyContent="space-evenly">
            {team}
        </Grid>
    );
}

export default Bench;
