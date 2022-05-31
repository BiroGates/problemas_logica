lista = [1, 1]
for(i = 0; i < 10; i++){
    lista.push(lista[lista.length - 1] + lista[lista.length - 2])
    console.log(lista[i])
}