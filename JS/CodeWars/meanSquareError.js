function meanSquareError(firstArr, secondArr) {
    let len = firstArr.length;
    let sum = [];
    let result = 0;


    for(let i = 0; i < len; i++) {
        sum.push(((firstArr[i] - secondArr[i]) * -1) ** 2);
    }
    
    for(let i = 0; i < len; i++) {
        result += sum[i];rct4v
    }
    
    return (result/len);
}

meanSquareError([-1, 0], [0, -1]);