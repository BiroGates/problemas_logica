// Big O(n) "Um linear falso porque to usando 2 funçoes built in"
function findUniq(arr){
    let compareArr = [];
    let x = [];
    for(let i = 0; i < arr.length; i++){
        if(i == 0) compareArr.push(arr[i]) 
        else if(compareArr.includes(arr[i])) compareArr.push(arr[i])
        else x.push(arr[i]); 
    }

    if(compareArr.length == 1) return compareArr[0];
    else return x[0];
}
console.log(findUniq([0,0,0,1]));