// Big O(n) "Linear"
function fib(esc){
    let t1 = 0;
    let t2 = 1;
    let proximo = t1 + t2;
    
    for(var i = 0; i < esc; i++){
        if(t2 >= esc){
            break;
        }
        t1 = t2;
        t2 = proximo;
        proximo = t1 + t2;
        console.log(t1);
    
    }
}

fib(100);