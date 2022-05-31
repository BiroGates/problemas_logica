// Big O(n * n)
function orgarnizarVetor(vetor){
    let len = vetor.length;
    let temp;
    
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(vetor[j] > vetor[i]){
                temp = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = temp;
            }
        }
    }
}
orgarnizarVetor([5,10,3,9])