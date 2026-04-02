const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Valor da pizza é:", (vp)=>{
    rl.question("Valor da taxa:", (vt)=>{
        rl.question("Quantidade de pessoas que vai pagar:", (p)=>{
            let pizza =+ vp;
            let taxa =+ vt;
            let total = pizza + taxa;
            let pess = total/p;
            console.log("Valor total da pizza + taxa foi:",total);
            console.log("Quanto cade pessoa vai pagar:", pess.toFixed(2))
            rl.close();
        })
    })


})