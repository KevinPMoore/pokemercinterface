
const damageCalculation = (attacker, defender, move) => {
    if (move?.type === "Status") {
        console.log('not a damaging move');
    }
    const atkStat = move?.type === "Physical" ? attacker?.attack : attacker?.specialAttack;
    const defStat = move?.type === "Physical" ? defender?.defense : defender?.specialDefense;
    //TODO: Include STAB
    //TODO: Include Weakness/Resistance/Immunity
    const damage = (((2 * attacker?.level)/5 + 2) * move?.power * (atkStat/defStat)/50 + 2) * (Math.floor(Math.random() * 16) + 85);
    console.log('damage = ', damage)
}

export default damageCalculation;