const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor A:",(a1)=>{
        rl.question("Escreva valor B:",(b1)=>{
            let a = +a1;
            let b = +b1;
            let soma=0;
            for(let i = a; i<=b; i++){
                if(i%2 ===0){
                    soma +=i;
                }
            }      
            console.log(soma)
            rl.close()
        })
    })