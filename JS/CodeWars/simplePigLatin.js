function pigIt(string) {
    return string.split(' ').reduce((acc, word, index, src) => {
        if(word.length > 1){
            return acc += word.substring(1, word.length) + word[0] + 'ay ';
        }else if(index < src.length - 1) {
            return acc += word + 'ay ';
        }else{
            return acc += word + ' ';
        }
    }, '').trim();
}  

console.log(pigIt('O tempora o mores !'));