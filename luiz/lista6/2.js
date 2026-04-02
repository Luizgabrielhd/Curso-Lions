const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Você é estudante? (s/n): ", (respEstudante) => {
    rl.question("Vai comprar pipoca? (s/n): ", (respPipoca) => {
        
        let total = 0;

        
        if (respEstudante === "s") {
            total = 10; 
        } else {
            total = 20; 
        }

        
        if (respPipoca === "s") {
            if (respEstudante === "s") {
                total += 6; 
            } else {
                total += 8; 
            }
        }

        console.log(`Valor total final: R$${total}`);
        rl.close();
    });
});