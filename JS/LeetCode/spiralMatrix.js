function spiralOrder(matrix) {
    let mLen = matrix.length;
    let nLen = matrix[0].length;
    let result = [];

    for(let i = 0; i < mLen; i++) {
        if(i === 0) console.log(matrix[i]);
        if(i != 0 && i != mLen - 1) console.log(matrix[i][nLen - 1]);
        if(i === mLen - 1) console.log(matrix[mLen - 1]);
    }


}

spiralOrder([[1,2,3],
             [4,5,6],
             [7,8,9]]);