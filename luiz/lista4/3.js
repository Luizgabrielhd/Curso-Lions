const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   rl.question("Idade da pessoa:", (idade) =>{
    let total = +idade;
    if(idade < 18){
        console.log("Menor de idade");
    }else{
        console.log("Maior de idade");
    }
    rl.close();
   } )