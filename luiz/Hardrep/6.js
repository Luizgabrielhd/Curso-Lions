const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor n:",(n1)=>{
        let n = +n1;
        let i = 1;
        let cont = 0;
        while(i<=n){
            if(i%4 === 1){
                cont ++;
            }
            i++;
        }
        
        console.log(cont)
        rl.close()

    })