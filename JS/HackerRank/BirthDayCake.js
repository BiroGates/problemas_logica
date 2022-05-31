// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function candles(candles){
    let max = candles[0];
    let len = candles.length;
    let can = 0

    for(let i = 0; i < len; i++) if(candles[i] > max) max = candles[i]
    for(let j = 0; j < len; j++) if(candles[j] == max) can+= 1;
    
    return can;
}

candles([3,2,1,3])