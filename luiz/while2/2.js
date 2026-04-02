const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valor de N:",(valor)=>{
    let n = +valor;
    let soma = 0;
    let contador = 1;
    while(contador<=n){
        soma += contador;
        contador++;
    }
    console.log("A soma valor ",soma)
  rl.close();  
})