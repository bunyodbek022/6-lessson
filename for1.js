function armStrong(num){
    let arr = []
    for(let i=1; i<num; i++){
        let sum = 0;
        let caskad = i;
        while(caskad){
            sum=sum + Math.pow(caskad%10 , String(i).length);
            caskad=parseInt(caskad/10)
        }
        if(i==sum){
            arr.push(i)
        }
    }
    return arr.join(" , ");
}
alert(armStrong(+prompt("Son kiriting: ")))
