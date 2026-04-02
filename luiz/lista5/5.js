const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Valor da compra:", (vc) => {
    rl.question("se tem cupom s/n:", (cp) => {
        let valor = + vc;


        if (cp === "s") {
            valor = valor * 0.95

        };


            if (valor >= 100) {
                valor = valor * 0.9

            };

        


        console.log("Valor ficou", valor)
        rl.close();


    });

});