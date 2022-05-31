// Big O(n^2);
function duplicateCount(str){
    let alreadySeen = [];
    let count = 0;
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(j != i && str[j] == str[i] && !alreadySeen.includes(str[i])){
                count += 1;
                alreadySeen.push(str[i]);
            }
        }       
    }
    return count;
}

// LOGICA DE BUTECO!!!
console.log(duplicateCount('indivisibility'));
