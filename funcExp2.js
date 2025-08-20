const check = function(son){
    return (son == son.split("").reverse().join(""));
}
console.log(check(prompt("Sonni kiriting")))