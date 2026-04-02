const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor de N:",(valor)=>{
    
        let n =+ valor;
        let x = 1;
        while(x<=n){
            console.log(x)
        x++;
        }
        rl.close();
    })