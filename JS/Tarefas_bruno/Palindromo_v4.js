// Big O Log (n);
function palin(name){
    let palin = true;
    for(let i = 0; i < (name.length - 1) / 2; i++){
        if(name[i] != name[(name.length - 1) - i]){
            palin = false;        
            break;
        }    
    }
    return palin;
}
console.log(palin('luzazul'));