function perfectNumber(n) {
    let sum = 0;

    for(let i = 1; i < n; i++) {
        if(n % i == 0) sum += i;
    }
    return sum == n;
}

let x = perfectNumber(496);
console.log(x);