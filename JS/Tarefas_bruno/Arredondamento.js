// Exercicio easy do bruno;
function arredondar(n){
    let dec = (n - Math.floor(n)).toFixed(2);
    let int = Math.floor(n);

    if(dec < .25) return int;
    if(dec > .25 && dec <= .5) return int + .5
    if(dec > .5 && dec < .75) return  (int + 1) - .5;
    if(dec >= .75) return int + 1; 
}
