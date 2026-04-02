const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor de N: ", (resposta) => {
    let n = parseInt(resposta);
    let qtdPrimos = 0;
    for (let i = 2; i <= n; i++) {
        let ePrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                ePrimo = false;
                break; 
            }
        }
        if (ePrimo) {
            qtdPrimos++;
        }
    }

    console.log(`Existem ${qtdPrimos} números primos entre 1 e ${n}.`);
    rl.close();
});