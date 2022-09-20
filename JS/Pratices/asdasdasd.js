function sum3(arr) {
    let sum = 0;
    let results = [];
    let finalResult = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++){
            for(let k = 0; k < arr.length; k++){
                sum = arr[i] + arr[j] + arr[k];
                if(sum === 0 && i != j && i != k && k != j){
                    results.push([arr[i], arr[j], arr[k]].sort());
                }
            }
        }
    }
    if(!results.length === false) finalResult.push(results[0]);
    for(let i = 0; i < results.length; i++) {
        let equal = true;
        for(let j = 0; j < finalResult.length; j++) {
            equal = compararArr(results[i], finalResult[j]);
            if(equal) break;
        }
        if(equal == false) finalResult.push(results[i]);
    }
    return finalResult
}

function compararArr(a, b){
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return false
    }
    return true
}
console.log(sum3([-2,0,1,1,2]));
// Parcial Solution;