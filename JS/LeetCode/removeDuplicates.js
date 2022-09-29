function removeDuplicates(arr) {
    let len = arr.length;

    // Substituindo numero repetido por '_';
    for(let i = 0; i < len; i++) {
        if(arr[i] !== '_') {
            for(let j = 0; j < len; j++) {
                if(arr[i] === arr[j] && i !== j) arr[j] = '_';
            }
        }
    }

    // Jogando todos os '_' pra ultimas possiçoes
    for(let i = 0; i < len; i++){
        if(arr[i + 1] !== '_' && i !== len - 1 && typeof(arr[i]) !== 'number'){
            firstTemp = arr[i + 1];
            arr[i + 1] = arr[i]
            arr[i] = firstTemp;

            for(let j = i; j >= 0; j--){   
                secondeTemp = arr[j];
                if(secondeTemp === '_'){
                    arr[j] = firstTemp;
                    arr[j + 1] = secondeTemp;
                }
            }
        }
    }

    // Verificando qual a posição acaba os numeros;
    let k = 0;
    for(let i = 0; i < len; i++) {
        if(arr[i] !== '_') k++;
        else break;
    }

    return k
}

console.log(removeDuplicates([1,2]));