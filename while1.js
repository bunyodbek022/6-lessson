function findMax(num){
    max = num%10;
    while(num){
        if(max<=num%10){
            max = num%10
        }
        num= parseInt(num/10);
    }
    return `Max: ${max}`;
}
alert(findMax(+prompt("Enter number: ")))