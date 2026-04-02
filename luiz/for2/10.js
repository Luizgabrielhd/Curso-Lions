const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valor de N:",(n)=>{
    let valor = +n;
    for(let i=0;valor>=0;valor--){
        console.log(valor)
}
console.log("Fim!")
rl.close()

})