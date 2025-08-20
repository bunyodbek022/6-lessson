function fibonachchi(num) {
    let arr = [0, 1];
    let i = 2;

    do {
        let next = arr[i - 1] + arr[i - 2];
        if (next > num) break;
        arr.push(next);
        i++;
    } while (true);

    return arr;
}

alert(fibonachchi(10)); 
