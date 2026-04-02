const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor x:",(x)=>{
        let valor = +x;
        
        for(let i=1;i<=10;i++){
            let multi = valor*i;
            console.log(valor,"x",i,"=",multi)
        }
        console.log("Tabuada finalizada")
        rl.close()
    })