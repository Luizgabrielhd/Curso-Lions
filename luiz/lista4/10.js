const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Quantidade de camisetas:", (qtd)=>{
    let total = qtd * 30;
    let desco = total/10;
    if(qtd >= 3){
        console.log("Valor com desconto é:", desco)
        rl.close();
    }else {
        console.log("Valor camiseta sem desconto:", total)
        rl.close();
    }


})