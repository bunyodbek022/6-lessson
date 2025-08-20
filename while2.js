function transNum(num){
    str =""
    while(num){
        str+=String(num%2)
        num=parseInt(num/2)
    }
    return str.split("").reverse().join("");
}
alert(transNum(+prompt("Enter the number")))