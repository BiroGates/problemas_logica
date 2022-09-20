function sum3(arr) {
    let sum = 0;
    let results = [];
    let finalResult = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++){
            for(let k = j; k < arr.length; k++){
                
                sum = arr[i] + arr[j] + arr[k];
                if(sum === 0 && i != j && i != k && k != j){
                    let first = arr[i];
                    let second = arr[j];
                    let third = arr[k];
                    
                    if(first > second){
                        let swap = first;
                        first = second;
                        second = swap;
                    }else if(first > third){
                        let swap = first;
                        first = third;
                        third = swap;
                    }else if(second > third){
                        let swap = second;
                        second = third;
                        third = swap;
                    }else if (second > first){
                        let swap = second;
                        second = first;
                        first = swap;
                    }
                    results.push([first, second, third]);
                
                }
            }
        }
    }
    console.log(results);
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
console.log(sum3([-1,0,1,2,-1,-4]));


