function armstrongNumber(n) {
    let power = n % 10;
    let resul = 0;
    console.log(power)

    n = n.toString();
    
    for(let i = 0; i < n.length; i++){
        resul += Number(n[i]**power);
    }

    return resul == Number(n);
}

console.log(armstrongNumber(1634));