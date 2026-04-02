const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor de N:",(n)=>{
    let valor = +n;
    let x = 1;
    let soma = 0;

while (x <= valor) {
    if (x % 3 === 0) {
        soma += x; 
    }
    x++; 
}

console.log(`A soma dos números divisíveis por 3 de 1 até ${n} é: ${soma}`); 
rl.close(); 
 })