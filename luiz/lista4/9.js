const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); 
    rl.question("Qual é sua idade:", (idade)=>{
       let ver =+idade;
       if(ver>=16){
        console.log("Pode votar");
       }else{
        console.log("Nao pode voltar")
       }
       rl.close();
    })