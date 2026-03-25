let num = [1,2,3,4,1,6,7,1,1,10]
let repe =1;
let qtd =0;
for(let i=0;i<num.length;i++){
    if(repe === num[i]){
        qtd++;
    }
}
console.log(qtd)