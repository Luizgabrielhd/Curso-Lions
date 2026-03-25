let numeros = [10, 25, 40, 5, 25, 33, 9, 12];
let x = 25;

let indiceEncontrado = -1; 


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === x) {
        indiceEncontrado = i; 
        break;
    }
}

console.log("O número " + x + " apareceu primeiro no índice: " + indiceEncontrado);