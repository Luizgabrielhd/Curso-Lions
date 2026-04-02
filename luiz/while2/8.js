const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valo de n:",(n)=>{
    let valor = +n;
    let x = 1;
    while(x<=valor){
        if(x%2 === 0){

        }else{
            console.log(x);
        }
        x++;
    }
    rl.close()
})