class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size += 1;
    }
    
    // Insert last node
    insertLast(data) {
        let currentNode = this.head
        for (let i = 0; i < this.size; i++) {
            if (currentNode.next === null) {
                currentNode.next = new Node(data, null)
                break;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.size += 1;
    }

    // Insert at index
    insertAtIndex(data, index) {
        if (index === 0) this.insertFirst(data);
        if (index === this.size) this.insertLast(data);
        else {
            let currentNode = this.head;

            for (let i = 0; i < this.size; i++) {
                if (i + 1 === index) {
                    currentNode.next = new Node(data, currentNode.next);
                    break;
                } else {
                    currentNode = currentNode.next;
                }
            }
            this.size += 1;
        }
    }

    // Get at index
    getAtIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {
            if (i === index) console.log(currentNode.data)
            else {
                currentNode = currentNode.next;
            }
        }
    }
    // Remove at index
    removeAtIndex(index) {
        if(index === 0) this.head = this.head.next;
        else{
            let currentNode = this.head;
    
            for (let i = 0; i < this.size; i++) {
                if(i + 1 === this.size){
                    currentNode.next = null;
                }else if(i + 1 === index){
                    let nextNode = currentNode.next;
                    currentNode.next = nextNode.next
                }else{
                    currentNode = currentNode.next;
                }
            }
        }
    }

    // Clear List
    clearList(){
        this.head.data = null;
        this.head.next = null;
    }

    // Print List data
    printarData() {
        let current = this.head
        while (true) {
            if (current.next != null) {
                console.log(current.data);
                current = current.next;
            } else {
                console.log(current.data);
                break
            }
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);

ll.insertLast(1200);

ll.insertAtIndex(1500, 3);

ll.getAtIndex(3);

ll.removeAtIndex(0);

ll.clearList();
console.log('=============');

ll.printarData();
console.log(ll.head);