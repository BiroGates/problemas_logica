function fator(n){
    // Pegando a primeira e segunda parte a ser iterada;
    let firstHalf = Math.floor(n / 2);
    let secondHalf = n;

    for(let i = 1; i < n / 2; i++){
        // Verificando se passou da metade do numero e realizando a soma EX: 1 x 2 x 3;
        if(i < Math.floor(n / 2)) firstHalf *= i;
        
        // Realizando a segunda soma da metade EX: 4 x 5 x 6 x 7; 
        secondHalf =  secondHalf *= Math.floor((n / 2) + i);
    }
    return firstHalf * secondHalf;
}