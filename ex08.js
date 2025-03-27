function multiplierParDeux(tab) {
    const TAB = []
    for (let i = 0; i < tab.length; i++) {
        let result = 0 
        result = tab[i] * 2
        TAB.push(result)        
    }
    return TAB
}

console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
console.log(multiplierParDeux([10, 20, 30])); // Résultat attendu : [20, 40, 60]
console.log(multiplierParDeux([15, 5, 1])); // Résultat attendu : [30, 10, 2]
console.log(multiplierParDeux([9000, 6, 3])); // Résultat attendu : [18000, 12, 6]