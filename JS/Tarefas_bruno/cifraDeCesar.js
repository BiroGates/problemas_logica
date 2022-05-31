function cifraDeCesar(giros, str, dir) {
    // Iniciando variaveis necessarias;
    let anelBase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let anelRotativo = anelBase.concat();
    let ultimaLetra = anelRotativo.length - 1;
    let posEsq = 0;
    let posDir = ultimaLetra;
    let strLen = str.length - 1;
    let swapTemp;

    // Transformando a str em array porque javascript é um lixo e não deixa eu mudar os caracteres, e eu to com preguiça de fazer uma função pra fazer isso;
    str = str.split('');

    // Se a direção do giro for pra ESQUERDA;
    if (dir == 'ESQUERDA') {
        // Eu vou executar a troca de acordo com quantos GIROS eu passei;
        for (let i = 0; i < giros; i++) {
            // Pra cada giro eu pego a primeira letra e vou jogando ela pra frente até que seja a ultima;
            for (let j = posEsq; j < anelRotativo.length - 1; j++) {
                // Armazena a variavel pra fazer a troca;
                swapTemp = anelRotativo[j + 1];
                // Fazendo a troca;
                anelRotativo[j + 1] = anelRotativo[j];
                anelRotativo[j] = swapTemp;
            }
            // Resetando a posição pra ele sempre pegar o primeiro elemento da array e não ir incrementando;
            posEsq = 0;
        }
    } else if (dir == 'DIREITA') {
        // Eu vou executar a troca de acordo com quantos GIROS eu passei;
        for (let i = 0; i < giros; i++) {
            // Pra cada giro eu pego a ultima letra e vou jogando ela pra tras até que seja a primeira;
            for (let j = posDir; j > 0; j--) {
                // Armazena a variavel pra fazer a troca;
                swapTemp = anelRotativo[j - 1];
                // Fazendo a troca;
                anelRotativo[j - 1] = anelRotativo[j];
                anelRotativo[j] = swapTemp;
            }
            // Resetando a posição pra ele sempre pegar o ultimo elemento da array e não ir diminuindo;
            posDir = ultimaLetra;
        }
    } else {
        return -1;
    }

    // Verficando cada letra da string;
    for (let i = 0; i <= strLen; i++) {
        // Verificando se a letra esta no alfabeto;
        for (let j = 0; j < anelBase.length; j++) {
            // Se a letra estiver no alfabeto;
            if (str[i] == anelBase[j]) {
                // Realizo a troca utilizando minha lista alterada;
                str[i] = anelRotativo[j]
                break;
            }
        }
    }

    // Convertendo a array pra string denovo e tratando ela;
    str = str.toString();
    str = str.replaceAll(',', '');

    // Retornando a string;
    return str;
}
let x = cifraDeCesar(1, 'banana', 'ESQUERDA');
console.log(x);























