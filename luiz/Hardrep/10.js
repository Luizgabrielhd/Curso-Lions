const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para calcular o fatorial: ", (resposta) => {
    let n = parseInt(resposta);

    if (n < 0) {
        console.log("Não existe fatorial de negativo");
    } else {
        let fatorial = 1; 
        
        for (let i = 1; i <= n; i++) {
            fatorial *= i; 
        }
        
        console.log(`O fatorial de ${n} é: ${fatorial}`);
    }
    
    rl.close();
});