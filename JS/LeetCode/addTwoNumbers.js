class node{
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class l1{
    constructor() {
        this.head = new node(2, new node(4, new node(3, null)));
        this.size = 0;
    }
}

class l2{
    constructor() {
        this.head = new node(5, new node(6, new node(4, null)));
        this.size = 0;
    }
}

const i1 = new l1();
const i2 = new l2();

function addTwoNumber(l1, l2) {
    let primeiraLista = [];
    let segundaLista = [];

    let firstHead = l1.head;
    let secondHead = l2.head;

    let result = 0;

    let firstCurrent = firstHead;
    while(firstCurrent != null) { 
        primeiraLista.unshift(firstCurrent.value);
        firstCurrent = firstCurrent.next;
    }
    
    let secondCurrent = secondHead;
    while(secondCurrent != null) { 
        segundaLista.unshift(secondCurrent.value);
        secondCurrent = secondCurrent.next;
    }

    result = Number(primeiraLista.join('')) + Number(segundaLista.join(''));
    return
}

addTwoNumber(i1, i2);