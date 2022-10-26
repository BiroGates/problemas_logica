function stripProperty(obj, prop) {
    for(let item in obj){
        if(item === prop) delete obj[prop]; 
    }
    return obj
}

stripProperty({nome: "gustavo"}, 'nome');