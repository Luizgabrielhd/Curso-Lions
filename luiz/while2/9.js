const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
 rl.question("Escreva valor x:",(x)=>{
    let valor = +x;
    let i =1;
    while(i<=10){
        let multi = valor * i;
        console.log(x,"x",i)
        console.log(multi)
        i++;

    }
    console.log("Tabuada finalizada")
    rl.close();

 })