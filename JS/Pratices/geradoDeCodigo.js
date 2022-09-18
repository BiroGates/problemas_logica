function geradoDeCodigo() {
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let code = '';
    let caracteres = 2; 

    let codigos = [];

    for(let i = 0; i < 25000; i++){
        for(let i = 0; i < caracteres; i++) {
            let numeroAleatorio = Math.floor(Math.random() * 10);                
            let posicaoAleatoria = Math.floor(Math.random() * 25);                
            if(Math.floor(Math.random() * 50) % 2 === 0) {
                code += numeroAleatorio
                code += alfabeto[posicaoAleatoria].toUpperCase();
            }else{
                code += alfabeto[posicaoAleatoria].toUpperCase();
                code += numeroAleatorio
            }
        }

        for(let j = 0; j < codigos.length; j++){
            if(codigos[j] === code) console.log('Repetiu : ' + j + ' : ' + codigos[j] + ' : CODIGO ATUAL: ' + code);
        }
        codigos.push(code);
        code = '';
    }
    console.log(codigos.sort());
}   

geradoDeCodigo();