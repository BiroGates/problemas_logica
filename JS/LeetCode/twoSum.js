function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] == target && i != j) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([1,2,3,4], 5));