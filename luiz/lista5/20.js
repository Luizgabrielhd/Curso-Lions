const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Valor compra:",(compra)=>{
        rl.question("Se quer entrega (s/n):", (entrega)=>{
            let valor =+ compra;

            if(valor>=100){
                console.log("Entrega gratis: ", valor);

            }else if(entrega === "s" ){
                valor = valor + 8;
                console.log("Com entrega R$8:",valor);
            }
            rl.close();
        });

    });