function organizarVetor(vetor){
    // Iniciando variaveis necessarias;
    let max = vetor[0];
    let min = vetor[0];
    let mid = vetor[0];
    let new_vetor = [];

    // Pegando o valor maximo e o valor minimo do vetor;
    for(let i = 0; i < vetor.length; i++){
        if(min < vetor[i]) max = vetor[i];
        if(max > vetor[i]) min = vetor[i];
    }

    // Pegando o valor entre esses dois extremos;
    for(let i = 0; i < vetor.length; i++) if(vetor[i] < max && vetor[i] > min) mid = vetor[i]; 
    
    // Adicionando os items pra uma nova array;
    new_vetor.push(min);
    new_vetor.push(mid);
    new_vetor.push(max);

    // retornando a array;
    return new_vetor;
}

function main(){
    console.log(organizarVetor([50,27,15]));
}

main();