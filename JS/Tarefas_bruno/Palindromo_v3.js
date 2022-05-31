//NA VERDADE É RUIM PORQUE TO CHAMANDO OUTRAS FUNÇOES PRA RODAR O CODIGO
//ENTÃO O MELHOR PALINDROMO É O PALINDROMO_V2
function palin(name){
    return JSON.stringify(name.split('')) == JSON.stringify(name.split('').reverse());
}