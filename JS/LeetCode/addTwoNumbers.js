class Node{
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function addTwoNumber(l1, l2) {
  reverseLinkedList(l1);
}

addTwoNumber(
  new Node(6, new Node(4, new Node(3))),
  new Node(5, new Node(6, new Node(4)))
);
