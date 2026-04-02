const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Quantidade de horas:",(h)=>{
        let hora =+ h;
        let tempo = 10;
        let horasExtras = hora - 2;
        
        if(hora <= 2){
            console.log("valor:",tempo);
        }
        if (hora > 2){
          
            valorFinal = 10 + (horasExtras * 3);
            console.log("Valor", valorFinal);


        }
        rl.close();
    });