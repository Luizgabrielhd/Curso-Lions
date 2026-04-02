const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor i:",(n)=>{
        let n1 = +n;
        for(let i = 0; i <= n1; i++){
            let t = '';
            
            for(let j = 0; j <= i; j++){
                t = t + '*'
            }

            console.log(t);
    
        }
           
        rl.close()
    })