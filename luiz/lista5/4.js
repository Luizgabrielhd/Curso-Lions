const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("Quantidade de salgados:",(sal)=>{
    rl.question("Vai querer refri s/n:", (refri)=>{
        let qtd =+ sal;
        let total = sal *7;

        let soma = total + 5;

        let desc = total/2;
        let desc1 = soma/1;
        
        if(qtd>=3 && refri === "s"){
            console.log("Valor desconto salgado e refri de R$1:", desc1)
            rl.close();

        }else if(qtd>=3){
            console.log("Valor com desconto de R$2:", desc)
            rl.close();
        }
        
    })

  })