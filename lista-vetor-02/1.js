let nums =[1,2,3,4,5];
maior = nums[0];
sm = nums[0];
tm = nums[0];

for(let i=0;i<nums.length;i++){
    if(nums[i]>maior){
        sm = maior;
        maior = nums[i];

    }else if(sm<nums[i]){
        tm = sm;
        sm = maior[i];
    }
}
console.log(maior)
console.log(sm)

