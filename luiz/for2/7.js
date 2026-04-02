const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor n:",(n)=>{
        let valor = +n;
        let contador =0;
        for(let i=1;i<=valor;i++){
            if(i%5 === 1){  
                contador++;
            }
        }
        console.log("Quantidae valores divisives por 5",contador)
        rl.close()

    })