// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

// Big O(n*2);
// Da pra melhorar!
function matrix(arr){
    let len  = arr.length;
    let fSum = 0;
    let sSum = 0;

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < arr[i].length; j++){
            if(i == j) fSum += arr[i][j];
            if(j == len - 1 - i) sSum += arr[i][j];
        }
    }

    return (Math.abs(fSum - sSum));
}

let x = matrix([[ 11,2,4 ],
                [ 4,5,6 ],
                [ 10,8,-12 ]])