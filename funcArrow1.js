const kopaytma = (num) => {
    let sum = 1;
    while(num > 0){
        sum *= num % 10;  
        num = Math.floor(num / 10); 
    }
    console.log(sum);
}

kopaytma(+prompt("Son kiriting:"));
