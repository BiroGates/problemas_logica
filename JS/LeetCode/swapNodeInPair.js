class node{
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}
let nodes = new node(2, new node(5, new node(3, new node(4, new node(6, new node(2, new node(2, null)))))));

function swapNodes(head) {
    let current = head;
    while(true){
        if(current && current.next !== null){
            let swap = current.val
            current.val = current.next.val;
            current.next.val = swap;
            current = current.next.next;
        }else{   
            if(current && current.next != null){
                current = current.next.next;
            }else{
                return head;
            }
        }
    }
}