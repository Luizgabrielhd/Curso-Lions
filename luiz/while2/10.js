const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valor n:",(N)=>{
    let valor = +N;
    let x =0;
    while(valor>=x){
        console.log(valor)
        valor--;
    }
    console.log("Fim!")
    rl.close()
    
})