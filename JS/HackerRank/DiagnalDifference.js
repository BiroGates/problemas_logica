// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function matrix(arr){
    let right = arr[0] + arr[(arr.length - 1) / 2] + arr[arr.length - 1] 
    let left = arr[2] + arr[(arr.length - 1) / 2] + arr[arr.length - 3]
    return Math.abs(right - left)
}

x = matrix([11,2,4,4,5,6,10,8,-12])
console.log(x)