const main = (params) => {
    const arr = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];   
    let firstValue = 250000;
    let secondvalue = 250000;
    for(let i = 0; i < arr.length / 2; i++) {
        firstValue -= arr[arr.length - 1 - i];   
        secondvalue -= arr[i];
    }

    return (secondvalue - Math.abs(firstValue));
}

main();
