const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
rl.question("Valor da pizza: ", (pizza) => {
    rl.question("Quantidade de pessoas: ", (quantidade) => {
        let total = +pizza;
        let pessoas = +quantidade;

        let racha = total / pessoas;

        console.log(racha);

        rl.close();
    })
});

