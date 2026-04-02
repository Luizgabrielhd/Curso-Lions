const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor n:",(n)=>{
        let valor = +n;
        for(let i =1;i<=valor;i++){
         console.log(i)   
        }
        rl.close()
    })