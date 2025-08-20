function kvadrat(num){
    let arr = []
    for(let i=1; i<=parseInt(Math.sqrt(num)); i++){
        arr.push(i*i)
    }
    return arr;
}

alert(kvadrat(+prompt("Sonni kiriting: ")))