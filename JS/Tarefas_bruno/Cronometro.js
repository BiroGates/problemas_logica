function CalcAlgoritimo(time, fun){
    let inicio = new Date();
       fun([[1,2], [2,3]]);
    let fim = new Date();
    let decorrido = (fim.getTime() - inicio.getTime()) / 1000;
    
    console.log(decorrido.toFixed(3))
}
function mostWater(arr) {
    let len = arr.length
    if(len > 10 ** 5) return 0;
    let max = 0;  

    for(let i = 0; i < len; i++) {
        let min = 0;
        let dif = 0;
        for(let j = i; j < len; j++) {
            if(j != i) {
                dif = j - i;
                if(arr[j] < arr[i]) min = arr[j];
                else min = arr[i]
                if(min * dif >= max) max = min * dif
            }
        }
    }
    console.log(max);
}
CalcAlgoritimo(1, mostWater);
