const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor n:",(n)=>{
        
        let valor = +n;
        let q2 =0;
        let q3 =0;
        let q5 =0;

        for(let i =1;i<=valor;i++){
            if(i%2 ===0){
                q2++;
            }if(i%3 === 0){
                q3++;
            }if(i%5 === 0){
                q5++;
            }
        }
        console.log("quantos são divisíveis por 2",q2)
        console.log("quantos são divisíveis por 3",q3)
        console.log("quantos são divisíveis por 5",q5)
    rl.close()
    })
    