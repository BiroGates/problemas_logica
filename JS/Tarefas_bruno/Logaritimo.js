// Big O(n);
function logaritimo(numero, expoente=1){
    let nElevado = 10 ** expoente;

    if(nElevado >= numero && nElevado <= numero+1){
        return expoente;
    }else if(nElevado > numero){
        return logaritimo(numero, expoente / 2);
    }else if (nElevado < numero){
        return logaritimo(numero, expoente + .1);
    }else{
        return -1;
    }
}

console.log(logaritimo(510));