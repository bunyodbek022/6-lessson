let karralik = function(num){
    let sum=0
    let arr = []
for(let i=1; i<=num; i++){
    if(i%5==0 || i%3==0){
        sum+=i;
        arr.push(i)
    }
}
return `${arr.join("+")} = ${sum}`;
}

alert(karralik(+prompt("Son kiriting:")))