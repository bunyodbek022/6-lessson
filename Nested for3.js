function triangle(N){
    for(let i = 1; i <= N; i++){
		let row = ""
        for(let j = 1; j <= i; j++){
             row+="*"		
        }
	console.log(row)
    }
}
triangle(+prompt("N ga nechi kiritasiz: "));