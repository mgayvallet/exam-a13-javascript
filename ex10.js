function longueursMots(mots) {
    const TAB = []
    for (let i = 0; i < mots.length; i++) {
        let result = mots[i].length
        TAB.push(result)
    }
    return TAB
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]