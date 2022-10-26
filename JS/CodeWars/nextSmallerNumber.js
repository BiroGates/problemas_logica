function nextSmall(num) {
    
    let str = '';
    let numString = String(num);

    for(let i = 0; i < numString.length; i++) {
        if(Number(numString[i]) > Number(str[i])) str = str + numString[i];
        else str = numString[i] + str;
    }

    console.log(str);
}
nextSmall(713);