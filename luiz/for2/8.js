const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva valor para n:",(n)=>{
        let valor = +n;
        for(let i=1;i<=valor;i++){
            if(i%2 === 0){

            }else{
                console.log(i)
            }
        }
        rl.close()

    })