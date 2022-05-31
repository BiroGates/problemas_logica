function CalcAlgoritimo(time, fun){
    let inicio = new Date();
    for(let i = 0; i < time; i++){
        fun(24);
    }
    
    let fim = new Date();
    let decorrido = (fim.getTime() - inicio.getTime()) / 1000;
    
    console.log(decorrido.toFixed(3))
}
function fator(n){
    // Pegando a primeira e segunda parte a ser iterada;
    let firstHalf = (n / 2);
    let secondHalf = n;
    let mid = 0

    for(let i = 1; i < n / 2; i++){
        // Verificando se passou da metade do numero e realizando a soma EX: 1 x 2 x 3;
        if(n % 2 != 0)
        if(i < (n / 2)) firstHalf *= i;
        
        // Realizando a segunda soma da metade EX: 4 x 5 x 6 x 7; 
        secondHalf =  secondHalf *= firstHalf + i;
    }   
    return firstHalf * secondHalf;
}
CalcAlgoritimo(1000000000,fator);
