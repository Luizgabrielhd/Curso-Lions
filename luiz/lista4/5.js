const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
 rl.question("Primeira nota:", (p1) =>{
    rl.question("Segunda nota:", (p2) =>{
        let val1 = +p1;
        let val2 = +p2;
        let media = (val1+ val2)/2;
        if(media >= 7){
            console.log("Aprovado");
        }else {
            console.log("Reprovado");

        }
        rl.close();     
    })

 })