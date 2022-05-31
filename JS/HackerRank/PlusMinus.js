// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function ratio(arr){
    let pos = [];
    let neg = [];
    let zer = [];
    let len = arr.length    
    
    for(let i = 0; i < arr.length; i++) if(arr[i] > 0){ pos.push(arr[i])}
    for(let i = 0; i < arr.length; i++) if(arr[i] < 0){ neg.push(arr[i])}
    for(let i = 0; i < arr.length; i++) if(arr[i] == 0){ zer.push(arr[i])}
    
    let posRatio = (pos.length / len).toFixed(6)
    let negRatio = (neg.length / len).toFixed(6)
    let zerRatio = (zer.length / len).toFixed(6)
    
    console.log(posRatio)
    console.log(negRatio)
    console.log(zerRatio)
}
ratio([1,1,0,-1,-1])