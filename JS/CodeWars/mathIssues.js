function ceil(number) {
    let rest = number - parseInt(number);
    if(rest == 0) return number;
    else return number - rest + 1;
}

function round(number) {
    let rest = number - parseInt(number) ;

    if(rest >= 0.50) return parseInt(number) + 1;
    else return parseInt(number);
}

function floor(n) {    
    let int = parseInt(n);
    return int;
}

console.log(ceil(5.1));