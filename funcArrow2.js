let perNum = (num) =>{
    let sum = 0;
    for(let i=1; i<=Math.floor(num/2); i++){
        if(num%i==0){
            sum+=i;
        }
    }
    return (sum == num);
}

console.log(perNum(+prompt("sonni kiriting: ")))