const findMax = (str) => {
    let arr = str.split(" ");
    let max = 0
     let max_str=""
     for(item of arr){
        if(max <= item.length){
             max_str = item
             max = item.length
        }
     }
     return max_str;
}
console.log(findMax("Men JavaScriptni o'rganayapman"))