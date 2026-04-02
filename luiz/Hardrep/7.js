const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva limite:",(l1)=>{
        let limite = +l1;
        let i = 1;
        let soma =0;
        while(i<=limite){
            soma += i;
            i++;
        }
        console.log("Soma ate limite:",soma)
        console.log("último número somado",i-1)
        rl.close()
    })