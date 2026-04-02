let n1 =40;
let n2 =10;
let n3 =3;
let n4 =18;
let n5 =2;
let numeros = [n1,n2,n3,n4,n5];
let maior =numeros[0];
let menor =numeros[0];

for (let i = 0; i < 5; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("O maior número é:", maior);
console.log("O menor número é:", menor);