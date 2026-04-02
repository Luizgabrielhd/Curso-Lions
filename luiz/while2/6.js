const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva o valor de n:",(n)=>{
        let valor = +n;
        let x = 1;
        let soma = 0;
        while(x<=valor){
            if(x%2 === 0){
                soma += x;

            }
            x++;
        }
        console.log('Soma dos pares ',soma);
        rl.close();

    })