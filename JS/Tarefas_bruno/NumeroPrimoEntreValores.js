function ehPrimo(n){
    if(isNaN(n))throw new Error('Digite um numero inteiro positivo!');
    //if(n == 1) throw new Error('O numero de inicio não pode ser 1!');

    for(let i = n; i > 1; i--) if(n != i && n != 1 && n % i == 0) return false;

    return true;
}

function EntreNumeros(com, fim){
    let qtd = 0;
    for(let i = com; i <= fim; i++){
        let primo = ehPrimo(i);
        if(primo) qtd += 1;
    }
    return qtd;
}

function main(){
    try{
        console.log(EntreNumeros(2, 1000000));
    }catch(err){
        
    }
}

main();