function changeNumber(arr, pos, num) {
    // Criando uma segunda array pra jogar os items la
    let newArr = Array(arr.length + 1);
    
    // Loopando uma primeira vez até achar a posição de troca
    for (let i = 0; i < newArr.length; i++) {
        if (i != pos) {
            // Copiando os numeros até achar a posição da troca
            newArr[i] = arr[i]
        } else {
            // Se eu achar vou jogar os numero uma posição pra frente
            for (let j = i; j < arr.length; j++) {
                let swap = arr[j];
                newArr[j + 1] = swap
            }
            // Como ja copiei todos os numeros não preciso mais iterar no primeiro for
            break;
        }
    }
    newArr[pos] = num;
    
    return newArr

}