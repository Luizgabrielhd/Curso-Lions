const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("valor da compra:", (compra)=>{
    rl.question("Valor pago:", (pago)=>{
        let vc =+ compra;
        let vp =+ pago;
        let troco = vp - vc;
        if(vp>vc){
            console.log("Valor do troco ficou:",troco);
            rl.close();
        }else if(vp == vc){
            console.log("Pagamento exato");
            rl.close();
        }else{
            console.log("Valor insuficiente");
            rl.close();
        }
    })

})