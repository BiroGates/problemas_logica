function reverseInteger (x) {
    let signal = '';
   
    if(x < 0) signal = '-'; 
    x = x.toString();
   
    let digits = x.length - 1;
    let reverse = '';


    for(let i = digits; i >= 0; i--) {
        reverse += x[i];
    }
    reverse = signal + reverse;
    reverse = parseInt(reverse);
    if(reverse >= 2147483647 - 1 || reverse <= -2147483647 - 1) return 0;
    return reverse;
}

reverseInteger(-320);