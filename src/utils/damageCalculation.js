import calculateTypeModifier from "./typeCalculation";

const damageCalculation = (attacker, defender, move) => {
    if (move?.damageType === "status") {
        console.log("not a damaging move");
    }
    const atkStat = move?.damageType === "physical" ? attacker?.attack : attacker?.specialAttack;
    const defStat = move?.damageType === "physical" ? defender?.defense : defender?.specialDefense;
    const movePower = typeof move?.power === "number" ? move?.power : 0;
    const stab = attacker?.typeList.includes(move?.elementType) ? 1.5 : 1;
    //TODO: Check for crit
    //TODO: Fx call for secondary effects/non-damaging moves
    const damage = Math.round(movePower * (atkStat / defStat) * stab * calculateTypeModifier(move?.elementType, defender?.typeList));
    console.log("damage = ", damage);
};

export default damageCalculation;
