const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor de n:",(n)=>{
        let num = +n; 
        let ePrimo = true;
        
        if (num <= 1) {
            ePrimo = false;
        } else {
            
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    ePrimo = false; 
                    break; 
                }
            }
        }
        
        if (ePrimo) {
            console.log(num + " é um número primo.");
        } else {
            console.log(num + " não é um número primo.");
        }
        rl.close()

    })