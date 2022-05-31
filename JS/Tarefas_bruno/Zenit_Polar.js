// Big O(n * n);
function zenitPolar(string) {
    let zenit = 'zenitpolar';
    let lenZenit = zenit.length;
    let word = string.split('');
    let lenString = string.length;
    let halfZenit = Math.ceil(lenZenit / 2);


    for(let i = 0; i < lenString; i++) {
        for(let j = 0; j < halfZenit; j++){
            if(word[i] == zenit[j]){
                word[i] = zenit[halfZenit + j];  
                break;
            } 
            if(word[i] == zenit[halfZenit + j]){
                word[i] = zenit[j];  
                break;
            } 
        }
    }
    return word;
}
console.log(zenitPolar('boas vindas'));