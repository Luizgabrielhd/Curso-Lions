const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escreva valor de n:",(n)=>{
    let valor = +n;
    let contador =0;
    let x =1;
    while(x<=valor){
        if(x%5 ===0){
            
            contador++;
        }
        x++;

    }
    console.log("Valor números são divisíveis por 5 de 1 até N",contador)
    rl.close();
})