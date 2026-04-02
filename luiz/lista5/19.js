const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("quantidade de diarias:",(qtd)=>{
        rl.question("se quer café da manhã s/n:",(quer)=>{
            let diarias  = +qtd;

            let total = diarias*90;
            
            if(quer === "s"){
                total = total+(diarias*15);
            }

            if(diarias>=3){
                total = total - 20;
            }

            console.log("total: ",total);
            
            rl.close();
        });

    });