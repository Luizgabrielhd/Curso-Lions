const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("valor da compra:", (valor) =>{
    let val =+ valor;
    let desco = val / 10;
    
    if(val>=100){
        total = val - desco;
        console.log("Valor com desconto 10% foi de:", total);
        rl.close();
    }else{
        console.log(val);
        rl.close();
    }

  })