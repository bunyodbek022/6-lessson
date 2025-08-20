function findMaxOfThree(a, b, c){
let arr = [a, b, c]
return Math.max(...arr)
}
alert(`Max: ${findMaxOfThree(12, 45, 30)}`)