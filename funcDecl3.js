function checkDigitSum(num){
 let result = (num<10) ? "Kichik" : ((num<20) ? "O'rtacha" : "Katta");
 console.log(result)
}

checkDigitSum(+prompt("Son kiriting: "))
