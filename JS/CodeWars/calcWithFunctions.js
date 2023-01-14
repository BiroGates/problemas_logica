function zero(func) {
    let signature = 0;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 0;
}
function one(func) {
    let signature = 1;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 1;
}
function two(func) {
    let signature = 2;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 2;
}
function three(func) {
    let signature = 3;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 3;
}
function four(func) {
    let signature = 4;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 4;
}
function five(func) {
    let signature = 5;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 5;
}
function six(func) {
    let signature = 6;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 6;
}
function seven(func) {
    let signature = 7;
    if(func) {
        let result = func(signature);
        return result;
    }
    
    return 7;
}
function eight(func) {
    let signature = 8;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 8;
}
function nine(func) {
    let signature = 9;
    if(func) {
        let result = func(signature);
        return result;
    }
    return 9;
}

function plus(plus) {
    return function (number) {
        return plus + number;
    }
}
function minus(minus) {
    return function (number) {
        return minus - number;
    }
}

function times(times) {
    return function (number) {
        return times * number;
    }
}
function dividedBy(diveded) {
    return function (number) {
        return diveded / number;
    }
}


let x = seven(times(five()));

console.log(x);