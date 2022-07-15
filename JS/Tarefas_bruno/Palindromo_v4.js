// Big O Log (n);
function palin(x){
    let palin = true;
    for(let i = 0; i < (x.length - 1) / 2; i++){
        if(x[i] != x[(x.length - 1) - i]){
            palin = false;        
            break;
        }    
    }
    return palin;
}
console.log(palin('luzazul'));