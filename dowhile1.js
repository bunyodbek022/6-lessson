function check(num){
    let sum = 0
    do {
        sum += num%10
        num=parseInt(num/10)
    } while (num)
    return sum%2 ? "Toq" : "Juft"
}
console.log(check(123))