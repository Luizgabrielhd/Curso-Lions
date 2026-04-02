const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escreva um numero: ", (num) => {  
    let numero = +num; 
    let soma = 0;

    while (numero > 0) {
        let ultimoDigito = numero % 10; 
        soma += ultimoDigito;          
        numero = (numero - ultimoDigito)/10;
    }

    console.log("A soma dos dígitos de  é: ",soma);
    rl.close();
});