const damageCalculation = (attacker, defender, move) => {
    if (move?.type === "Status") {
        console.log("not a damaging move");
    }
    const atkStat = move?.type === "Physical" ? attacker?.attack : attacker?.specialAttack;
    const defStat = move?.type === "Physical" ? defender?.defense : defender?.specialDefense;
    const attackerLevel = typeof attacker?.level === "number" ? attacker?.level : 0;
    const movePower = typeof move?.power === "number" ? move?.power : 0;
    //TODO: Include STAB
    //TODO: Include Weakness/Resistance/Immunity
    const damage = ((((2 * attackerLevel) / 5 + 2) * movePower * (atkStat / defStat)) / 50 + 2) * (Math.floor(Math.random() * 16) + 85);
    console.log("damage = ", damage);
};

export default damageCalculation;
