const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valor x :",(x)=>{
    let tabuada = +x;
    let i = 1;
    while(i<=10){
        let valor = i* tabuada;
        console.log(tabuada,"x",i)
        console.log(valor)
        i++;
    }
    rl.close()

})