const avg = function(arr){
    return (arr.reduce((sum, item) => sum+item, 0))/arr.length;
}

console.log(`O'rtacha: ${avg([1, 2, 3, 4, 5])}`)