function getLengthOfMissingArray(arr) {
    let len = arr.length - 1;
    let newArr = arr.sort()
    let resul = 0;
    let temp;
    let temp2;

    console.log(arr.length);

    for(let i = 0; i < len; i++){
        
        if(arr[i + 1].length < arr[i].length){
            
            temp = arr[i];
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
            
            for(let j = i; j >= 0; j--){
                temp2 = arr[j]
                if(temp2 > temp){
                    arr[j] = temp;
                    arr[j + 1] = temp2;
                }
            }
        }
    }

    for(let i = 0; i < len; i++){
        if(arr[i + 1].length > arr[i].length + 1){
            resul = arr[i].length + 1;
        }
    }
    

    console.log(resul);
    console.log(arr);
}
getLengthOfMissingArray([ [1, 3], [4, 2, 2], [3, 0, 4, 2], [2, 4, 3, 3, 0, 2, 1, 4],
    [1, 2, 1, 1, 4], [4, 0, 2, 2, 2, 4, 4, 4, 0], [2, 3, 2, 1, 1, 0, 2, 3, 1, 4], [4, 4, 2, 0, 1, 2] ]);

// 