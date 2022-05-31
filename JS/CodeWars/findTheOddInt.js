// Big O(n^2);
function findOdd(arr){
    // Contando o items;
    let count = 0;
    // Criando uma nova array pra comparar o numero ja vistos!;
    let listed = [];
    
    for(let i in arr){
        // Se o numero ainda não foi visto;
        if(!listed.includes(arr[i])){
            // Adiciono o numero na lista de vistos;
            listed.push(arr[i]);
            // Conto quantos dele tem na array passada como argumento;
            for(let j = 0; j < arr.length; j++){
                // Se os numero forem os mesmos eu adiciono
                if(arr[j] == arr[i]){
                    count += 1;
                }
            }
            // Se a quantidade de numero foi impar eu retorno ele
            if(count % 2 != 0) return arr[i];
        }  
    }
}
console.log(findOdd([0,1,0,1,0]));

// NOTAS:
// 1 - Da pra eu fazer sem uma array assim melhorando a performance;
// seria usando uma variavel "temp" para armazenar o numero que eu to vendo;


// PROBREMAS:
// 1 - Algoritimo muuuuuuito ineficiente;
// 2 - Faço 3 comparaçoes pra ter meu resultado;
// 3 - Funciona so pra um caso especifico;