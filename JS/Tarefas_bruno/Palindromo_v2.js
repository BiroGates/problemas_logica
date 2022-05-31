function palin(name){
    let = verify = '';
    for(var i = name.length - 1; i >= 0; i--){
        verify += name[i];
    }
    return name == verify;
}
console.log(palin('luzazul'));