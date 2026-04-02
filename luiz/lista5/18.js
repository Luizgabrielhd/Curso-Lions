const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("Escreva numero:", (num)=>{
        let numero =+ num;
        let total = numero %2; 

        if(total == 0){
            console.log("Este numero e par:");
        }else{
            console.log("E impar:");
        } 

        rl.close();
    });
    