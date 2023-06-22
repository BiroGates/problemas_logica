class complicatedMath {
  static sayHello() {
    console.log('hello'); 
  } 
}

class mathItems extends complicatedMath{
  
  
  static sum(a, b) {
    return a + b;
  }

  static subtract(a, b){
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b){
    return a / b;
  }
}

let result = mathItems.sayHello();
console.log(result);
