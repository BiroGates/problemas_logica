function diagonalSum(arr) {
  let sumD = 0;
  let sumE = 0;
  let len = arr[0].length;
  for(let i = 0; i < arr[0].length; i++) {
    
    sumD += arr[i][i];
    sumE += arr[i][arr[0].length - 1 - i];
  }
  
  if(len % 2 !== 0) {
    return sumD + sumE - arr[(len - 1) / 2][(len - 1) / 2];
  }else{
    return sumD + sumE;
  }
}


let x = diagonalSum([ [1,2,3],
                      [4,5,6],
                      [7,8,9]]);

console.log(x);