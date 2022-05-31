//Big O(n);
function sumDigits(n){
    let toString = n.toString();
    let sum = 0;
    for(let i = 0; i < toString.length; i++){
        if(!isNaN(Number(toString[i]))) sum += Number(toString[i]); 
    }

    if(sum.toString().length == 1){
        return sum;
    }else{
        return sumDigits(sum);
    }
}
console.log(sumDigits(942));