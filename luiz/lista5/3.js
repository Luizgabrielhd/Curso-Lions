const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
 rl.question("Nota 1:", (n1)=>{
    rl.question("Nota 2:", (n2)=>{
        let v1 = +n1;
        let v2 = +n2;
 
        let media = (v1+v2)/2 
        if(media>=7){
            console.log("Aprovado",media)
            rl.close();
        }else if(media>=5){
            console.log("Recuperaçao")
            rl.close();
        }else{
            console.log("Reprovado");
            rl.close();
        }   
    })
 })