const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("quantidade de metros cúbicos consumidos:", (mc) =>{
        let total = mc * 3;
        console.log("mostrar o total da conta", total);
        rl.close();


    })