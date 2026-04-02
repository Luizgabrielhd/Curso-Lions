const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor de N:",(n)=>{
        let valor = +n;
        let x = 1;
        let contador = 0;
        while(x<=valor){
            if((x%2)=== 0){
                contador++;
              
            }
            x++;
        }  
        console.log("Total numeros pares",contador)
        rl.close();
    })