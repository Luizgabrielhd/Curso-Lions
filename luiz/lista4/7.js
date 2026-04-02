const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("quantidade de quilômetros rodados:", (km) =>{
    let total = km * 4;
    console.log("Total corrida foi:", total)
    rl.close()
  })