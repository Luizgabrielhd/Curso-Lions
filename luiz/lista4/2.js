const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Valor da compra :", (compra) =>{
    rl.question("valor pago pelo cliente :", (pago) =>{
        let valor = +compra;
        let pagou = +pago;

        let troco = compra - pago;
         
        if(pagou > compra || pagou == compra){
            console.log(troco);
        }else{
            console.log("Valor insuficiente")
        }
        rl.close();
        })
        
} )

