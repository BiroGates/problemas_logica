// Big O(n);
const readLine = require('prompt-sync')(); 

function ehPrimo(n, i=n){
    // Tratando erros;
    if(isNaN(n)) throw new Error('Isso não é um numero');
    
    // Fazendo validaçoes;
    if(i != 1 && n % i == 0 && n!= i ) return false;
    
    // Caso base;
    if(i == 1) return true;
    
    //Recursão
    return ehPrimo(n, i - 1);
}
function main(){
    try{
        let x = readLine('Digite um numero inteiro positivo: ');
        console.log(ehPrimo(x));
    
    }catch(err){
        console.log(err.message);
    }
}
main();