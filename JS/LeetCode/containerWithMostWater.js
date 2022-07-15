function mostWater(arr) {
    let len = arr.length
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