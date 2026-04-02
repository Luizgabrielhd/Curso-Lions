const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor x:",(x)=>{
        let x1 = +x;
        for(let i=1;i<=10;i++){
            let multi = x1 *i;
            if(multi%2 ===0 ){
                console.log(multi)
            }
            
          
        }
          rl.close()
    })