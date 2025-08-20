function Tub(num) {
    let arr = [];
    while (num > 1) {
        let tub = true;
        let i = 2;

        while (i * i <= num) { 
            if (num % i === 0) {
                tub = false;
                break;
            }
            i++;
        }

        if (tub) arr.push(num);
        num--;
    }
    return arr.reverse(); 
}

console.log(Tub(20));
