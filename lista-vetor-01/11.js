let v = [1,2,3,4,5];
let inv = [];

for(let i =0,j= v.length-1; i<v.length; i++,j--){
    inv[j]=v[i]
    

}
for(let i=0;i<inv.length;i++){
    console.log(inv[i])
}