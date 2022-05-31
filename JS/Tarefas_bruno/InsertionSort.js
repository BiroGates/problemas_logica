// Big (n^2);
function insertionSort(arr){
    let len = arr.length
    let firstTemp;
    let secondeTemp;

    // Loopando pela lista
    for(let i = 0; i < len; i++){
        // Verificando se o proximo elemento é maior que o atual(i) e fazendo o swap;
        if(arr[i + 1] < arr[i]){
            firstTemp = arr[i + 1];
            arr[i + 1] = arr[i]
            arr[i] = firstTemp;
            // Verificando se o elemento que acabei de pegar é menor que o anterior a ele
            // e assim em diante
            for(let j = i; j >= 0; j--){   
                secondeTemp = arr[j];
                // Se for verdade eu faço mais um swap;
                if(secondeTemp > firstTemp){
                    arr[j] = firstTemp;
                    arr[j + 1] = secondeTemp;
                }
            }
        }
    }
    return arr;
}
console.log(insertionSort([7,8,5,2,4,6]));