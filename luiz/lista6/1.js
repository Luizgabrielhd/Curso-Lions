const { ref } = require('process');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
        rl.question("Quantidade de hambúrgueres:",(qtd)=>{
            rl.question("se vai querer refrigerante (s/n):",(q)=>{
                let Quantidade =+ qtd;
                let preco = Quantidade *12;
                let refri = q + 6; 
                
                if(Quantidade>=2 && refri === "s" ){
                    preco = preco - 4;

                }else if(Quantidade>=2){
                    preco = preco - 3;

                };
                if(refri === "s"){
                    preco = preco = (preco + 6);
                }
                console.log("Valot total:",preco)
                rl.close();

            })
        })