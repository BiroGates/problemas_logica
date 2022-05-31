// ALGORITIMO NÃO FUNCIONA E FOI MELHORADO PRO BUBLLE SORT
// QUE TAMBÉM TA NA PASTA;

function organizarVetor(vetor){
    // Variaveis necessarias;
    let max;
    let min;
    let len = vetor.length;
    let new_vetor = [];

    for(let i = 0; i < len; i++){
        max = vetor[i];
        min = vetor[i];
        for(let j = 0; j < len; j++){
            // Quando ta no ultimo elemento ele não passa por nenhuma dessas condiçoes então o I = 9(ultimo) elemendo
            // Acabei de corrigir isso;
            if(vetor[j] > max && !new_vetor.includes(vetor[j])) max = vetor[j];      
            if(vetor[j] < min && !new_vetor.includes(vetor[j])) min = vetor[j];      
        }
        // Verifico se algum valor ta na minha nova lista;
        if(!new_vetor.includes(max)) new_vetor.push(max);
    }
    // Adicionando o menor e ultimo valor da lista;
    console.log(new_vetor);
}
// O problemas do outro algorito era que eu sempre me baseava no menor valor
// Então quando loopava no 3 ele não conseguia ser o maior valor então não entrava na condição do max 
// Problemas:
// 1 - Não posso colocar um valor grande na primeira opção
organizarVetor([10,7,3,25,2,9]);
