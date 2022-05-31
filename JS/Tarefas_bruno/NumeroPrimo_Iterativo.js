// Big O(n);
const readLine = require('prompt-sync')();

function ehPrimo(n){
    if(isNaN(n))throw new Error('Digite um numero inteiro positivo!');
    for(let i = n; i > 1; i--) if(n != i && n % i == 0) return false;
    return true;
}

function main(){
    try{
        let x = readLine('Digite um valor: ');
        console.log(ehPrimo(x))
    
    }catch(err){
        console.log(err.message);
    }
}
main();