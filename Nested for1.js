function paskal(N) {
    let triangle = [];

    for (let i = 0; i < N; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1; 
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }
    for (let i = 0; i < N; i++) {
        console.log(triangle[i].join(" "));
    }
}

paskal(5);
