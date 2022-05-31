// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function MinMaxSum(arr){
    let val = 0
    let val_eql = arr[0]
    let arr_val = []
    let print_equal = false;

    //Somando as possiblidades da array
    for(let i = 0; i < arr.length; i++){
        val = 0
        for(let j = 0; j < arr.length; j++){
            if(arr[i] != arr[j]){
                val += arr[j]
            }
        }
        arr_val.push(val)
    }

    //Verificando se os numeros de um array são iguais
    for(let i = 0; i < arr.length; i++){
        if(val_eql == arr[i]){
            print_equal = true
        }else{
            print_equal = false
        }
    }
    
    // Verificando o maior e menor valor de uma lista
    let min = arr_val[0]
    let max = arr_val[0]

    for(let i = 0; i < arr_val.length; i++) if(arr_val[i] < min) min = arr_val[i];
    for(let i = 0; i < arr_val.length; i++) if(arr_val[i] > max) max = arr_val[i];

    // Mostrando no console
    if(print_equal == true){
        console.log(val_eql * (arr.length - 1), val_eql * (arr.length - 1))
    }else{
        console.log(min, max)
    }
}
MinMaxSum([1,2,3,4,5])
