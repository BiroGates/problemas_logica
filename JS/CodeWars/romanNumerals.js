// Big O (n * n);
function toRoman(str) {
    let numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let counter = 0;
    let strLen = str.length;

    for(let i = 0; i < strLen; i++){ 
        for(item in numerals){
            console.log(numerals[str[i]]);
            if(str[i] == item){
                if(numerals[str[i + 1]] > numerals[str[i]]){
                    counter -= numerals[str[i]];
                }else{
                    counter += numerals[str[i]];
                }
            }
        }
    }

    return counter;
}