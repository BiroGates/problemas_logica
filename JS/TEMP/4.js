function maiorSequencia(arr){
    let len = arr.length - 1;
    
    let newArr = [];
    let maior = [];

    for(let i = 0; i <= len; i++){
        
        newArr.push(arr[i]);
        
        if(arr[i + 1] > arr[i] + 1 || arr[i + 1] < arr[i]){
            maior = newArr
            newArr = [];
        }
    }

    console.log(maior);
}

maiorSequencia([1,2,3,4,6,9,1,2]);