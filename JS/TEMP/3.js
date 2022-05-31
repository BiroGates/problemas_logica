function maiorSequencia(arr){
    let len = arr.length - 1;

    let newArr = [];
    let maior = [];

    let counter = 0

    // Loopando por toda a lista
    for(let i = 0; i <= len; i++){
        
        newArr[counter] = arr[i]
        
        if(arr[i + 1] > arr[i] + 1 || arr[i + 1] < arr[i]){
            if(newArr.length > maior.length){
                maior = newArr
            }
            newArr = [];
            counter = 0;
        }else{
            counter++;
        }
        
    }
    console.log(maior);
}

maiorSequencia([1,2,3,4,6,9,1,2]);