const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Quantidade de salgados :", (qtd) => {
    rl.question("vai querer refrigerante (s/n) : ", (refri) => {
        let qtdsalgado = +qtd

        let valor = qtdsalgado * 7

        if (refri === "s") {
            valor = valor + 5;

        }
        console.log("Valor total", valor)
        rl.close();
    })
})