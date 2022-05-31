class Key {
    constructor(key, value, next){
        this.key = key;
        this.pointer = value;
        this.next = next;
    }
}

class Value{
    constructor(value){
        this.value = value;
    }
}

class Dictonary{
    constructor(){
        this.head = null
        this.size = 0
    }

    addPair(key, value){
        this.head = new Key(key, new Value(value), this.head);
        this.size++;
    }

    findKey(key){
        let currentKey = this.head;
        let found = null;
        for(let i = 0; i < this.size; i++){
            if(currentKey.key === key){
                found = (currentKey.pointer.value);
                break;    
            }
            else if (currentKey.next != null){
                currentKey = currentKey.next;
            } 
            else{
                found = 'Item Not Found!';
            }
        }
        console.log(found);
    }

    removeKey(key){
        let currentKey = this.head;
        for(let i = 0; i < this.size; i++){
            if(currentKey.next.key === key){
                
            }
        }
    }

    printDict(){
        let currentKey = this.head;
        for(let i = 0; i < this.size; i++){
            console.log(`${currentKey.key} : ${currentKey.pointer.value}`);
            currentKey = currentKey.next;
        }
    }
}

const dict = new Dictonary;
console.log('=============');
dict.addPair('1', 50);

dict.addPair('2', 100);
dict.addPair(3, 500);
dict.addPair(4, 500);
dict.addPair('gustavo', 'Hello');
dict.printDict();
console.log('=============');
dict.findKey(3);