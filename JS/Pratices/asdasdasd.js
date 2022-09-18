function recursao(n) {
    let numero = n * 10
    console.log(numero);
    
    if(numero >= 4 ) return 'Dahora';
    
    return recursao(numero);
}

recursao(1);