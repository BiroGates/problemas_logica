function generateHashtag(string) {
    if(!string || string === '') return false;
    let x =  '#' + string.trim().split(' ').map(item => item.charAt(0).toUpperCase() + item.substring(1, item.length)).join('');
    console.log(x);
    
    if(x === '#') return false
    if(x.length > 140) return false

    return x;
}

console.log(generateHashtag(' ')); 