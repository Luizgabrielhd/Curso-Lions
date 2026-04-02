const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Valor da compra", (cp)=>{
        rl.question("Se vai pagar pix s/n", (pix)=>{
            let compra =+ cp;
            let pagar =+ pix;


            if(compra<10){
                compra = compra + 10;
                console.log("Valor a abaixo sera cobrado R$10")

            }



            if(pagar === "s"){
                pagar = pagar /5;
                console.log("se pagar no PIX, dar 5% de desconto", pagar)

            }
            if(pagar === "n"){
                console.log("Valor:",compra);
            }

        })

    })