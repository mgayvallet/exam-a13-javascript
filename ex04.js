function estNegatif(nombre) {
	if(nombre < 0) return false
    else if (nombre >=0) return true
}

console.log(estNegatif(-3)); // Résultat attendu : true
console.log(estNegatif(5)); // Résultat attendu : false
console.log(estNegatif(-2)); // Résultat attendu : false
console.log(estNegatif(-0)); // Résultat attendu : true
console.log(estNegatif(0)); // Résultat attendu : true
console.log(estNegatif(1)); // Résultat attendu true