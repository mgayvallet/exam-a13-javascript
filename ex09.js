function nombreLettres(mot) {
    let conter = 0
    for (let i = 0; i < mot.length; i++) {
        conter ++       
    }
    return conter
}

console.log(nombreLettres("chat")); // Résultat attendu : 4
console.log(nombreLettres("porte")); // Résultat attendu : 5
console.log(nombreLettres("lettre")); // Résultat attendu : 6
console.log(nombreLettres("")); // Résultat attendu : 0
console.log(nombreLettres("ca")); // Résultat attendu : 2
