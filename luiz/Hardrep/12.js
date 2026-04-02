const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escrava valor n:",(n1)=>{
        let n = +n1;
        let soma =0;
        for(let i=1;i<=n;i++){
            if(i%3 === 0){

            }else{
                soma +=i;
            }
        }
        console.log(soma)
        rl.close()
    })