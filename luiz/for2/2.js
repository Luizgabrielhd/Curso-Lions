const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valor n:",(n)=>{
    let valor = +n;
    let soma = 0;
    for(let i=0;i<=valor;i++){
        soma += i;  
    }
    console.log(soma);
    rl.close();
})