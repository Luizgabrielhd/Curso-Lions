const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor n:",(n)=>{
        let valor = +n;
        let contador = 0;
        for(let i =1;i<=valor;i++){
            if(i%2 === 0){
                contador++;
            }
        }
        console.log(contador)
        rl.close()

    })