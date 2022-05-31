function palin(nome){
    let verify = '';
    let index = nome.length - 1;
    
    for(var i = 0; i <= nome.length - 1; i++){
        verify += nome[index];
        index -= 1;
    }
    
    if(nome == verify){
        return true;
    }else{
        return false;
    }

}
console.log(palin('Banana'))