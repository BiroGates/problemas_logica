// Big o(n^2);
function replaceVowel(str){
    let vowels = 'aeiou';
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(str[i].toLowerCase() == vowels[j]) str = str.replaceAll(str[i], '');
        }
    }
    return str;
}
console.log(replaceVowel('This website is for losers LOL!'));