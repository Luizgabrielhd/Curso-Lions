const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

    let totalpago = 0;
    let preco = 130;
    let pagamento = 3;
    let valorParcela = 40;

    
    for (let i = 0; i < pagamento; i++) {
        totalpago += valorParcela;
    }
    if (totalpago < preco) {
        let falta = preco - totalpago;
        console.log("Faltou", falta);
    } else if (totalpago === preco) {
        console.log("Pagou Certinho");
    } else {
        let troco = totalpago - preco;
        console.log("Pagou mais", troco);
    }
    
    rl.close();
