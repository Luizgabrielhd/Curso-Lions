let numeros = [2, 5, 8, 12, 20, 35];
// let numeros = [2, 10, 8, 15, 20, 25]; 

let ehCrescente = true; 
for (let i = 0; i < numeros.length; i++) {
    
    
    if (numeros[i] > numeros[i + 1]) {
        ehCrescente = false;
        break; 
    }
}


if (ehCrescente) {
    console.log("Crescente");
} else {
    console.log("Não crescente");
}