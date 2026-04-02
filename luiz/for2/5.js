const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valor n:",(n)=>{
    let valor = +n;
    soma =0;
    for(let i=0;i<=valor;i++){
        if(i%3 === 0){
            soma += i;
        }
    }
    console.log(soma)
})