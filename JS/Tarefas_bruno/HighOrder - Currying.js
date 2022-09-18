// NOME DISSO AQUI É CURRYING



function multiplier(mult){
    return function (number) {
        return mult * number;
    }
}

const double = multiplier(2)
const triple = multiplier(3) 
const quadruple = multiplier(4)

console.log(double(10))
console.log(triple(10))
console.log(quadruple(10))