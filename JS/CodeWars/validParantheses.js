function validParanthese(string) {
    //Edge cases
    if(string.charAt(0) === ')' || string.charAt(string.length - 1) === '(') return false;

    let check = 0
    string.split('').map(item => item === '(' ? check ++ : check --);

    return check === 0;
}

console.log(validParanthese('()()'));