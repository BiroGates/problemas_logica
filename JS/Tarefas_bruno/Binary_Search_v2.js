// Big O log(n)
const readLine = require('prompt-sync')();

function binarySearch(lis, ele, com, fim){
    let mid = Math.floor((com + fim) / 2);

    // Mostrando a posição pro usuario;
    if(ele == lis[com])return com; 
    if(ele == lis[mid])return mid; 
    if(ele == lis[fim])return fim;

    // Verificando se o valor ultrapassa os dois extremos;
    if(ele < lis[com] || ele > lis[fim]) throw new Error("O valor ultrapassa os dois extremos!");
    
    // Fazendo a busca binaria;
    if(ele > lis[mid])return binarySearch(lis, ele, mid, fim);
    if(ele < lis[mid])return binarySearch(lis, ele, com, mid); 
}


function getValue(){
    let v = readLine('Digite um valor: ');
    return v;
}

function main(){
    try{
        let lista = [3,4,5,6,7,8,9,10,12]
        let x = getValue();
        console.log(binarySearch(lista, x, 0, lista.length - 1));
    }
    catch(err){
        console.log(err.message);
        return false;
    }
}
main();
