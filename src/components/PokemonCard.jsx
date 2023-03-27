import { Card } from "@mui/material";

const pokemonCard = ({ index, pokemon, selected, setSelectedIndex }) => {
    const handleCardClick = () => {
        setSelectedIndex(index);
    };

    const hitPoints = `HP: ${pokemon.hp} / ${pokemon.hp}`;
    return (
        <Card elevation={selected ? 8 : 1} onClick={handleCardClick}>
            <div style={{ border: selected ? "2px solid gold" : null }}>
                <p>A pokemon image will go here</p>
                {hitPoints}
            </div>
        </Card>
    );
};

export default pokemonCard;
