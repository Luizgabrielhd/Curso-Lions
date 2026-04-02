const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor x:",(x)=>{
        let valor = +x;
        for(let i=0;i<=10;i++){
            let multi = x * i;
            console.log(x,"X",i,"=",multi)
        }
        rl.close();
    })