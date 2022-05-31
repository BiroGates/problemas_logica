// Big O log(n)
const readLine = require('prompt-sync')();

function binarySearch(lis, ele, com, fim){
    let mid = Math.floor((com + fim) / 2);
    console.log("Começo: " + com);
    console.log("Meio: " + mid);
    console.log("Fim: " + fim);
    console.log("Elemento procurado: " + ele);
    console.log("Elemento atual: " + lis[mid]);
    console.log("=============")
    
    if(ele == lis[com] || ele == lis[mid] || ele == lis[fim]){
        return true;
    }

    if(ele < lis[com] || ele > lis[fim]){
        return false;
    }

    if(ele > lis[mid]){
        return binarySearch(lis, ele, mid, lis.length - 1);
    }
    
    if(ele < lis[mid]){
        return binarySearch(lis, ele, com, mid)
    }
}

function main(){
    try{
        let lista = [3,4,5,6,7,8,9,10,12]
        let x = readLine('Digite um valor: ');

        console.log(binarySearch(lista, x, 0, lista.length));        
    }
    catch(err){
        console.log(err.message);
        return false;
    }
}
main();
