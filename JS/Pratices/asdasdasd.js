// Big o(log n);

function eVogal(letter) {
    return  letter === 'a'||
            letter === 'e'||
            letter === 'i'||
            letter === 'o'||
            letter === 'u'
}
eVogal('i');

function replaceVowel(str){
    let len = str.length - 1
    let begin = '';
    let end = '';
    for(let i = 0; i < Math.ceil(str.length / 2); i++){
        console.log(len/2);
        if(!eVogal(str[i])) begin += str[i];
        if(!eVogal(str[Math.ceil(len/2 + i)])) end += str[Math.ceil(len/2) + i];
    }
    return begin + end.trim();
}

console.log(replaceVowel('O peito do pé do pedro é preto'))