function movingZero(arr) {
    let temp;
    let len = arr.length -1;

    // Pegando o primeiro elemento da lista
    for(let i = 0; i < len; i++){
        // Fazendo mais um loopig pra cada elemento
        for(let j = i; j < len; j++){
            // Se o meu elemento do segundo looping for igual a zero
            if(arr[j] === 0){
                // Faço o swap e continuo no meu segundo looping
                // Verificando as outras posiçoes
                temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(movingZero([1,0,false, [], {}, 0, 15, true]));