class Node {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
    
  }
}


function getSize(head) {
  let counter = 1;
  let current = head;
  while(true) {
    if(current.next) {
      counter++;
      current = current.next;
    }else{
      break;
    }
  }

  return counter;
}


function removeNthNode(head, n) {
  let size = getSize(head);
  let current = head;
  let counter = 1;
  while(true) {
    if(size === n){
      if(size === 1) {
        head = null;
      }else{
        head = current.next;
      }
      break;
    }else if(size - counter === n) {
      current.next = current.next.next;
  
    }else if(counter + 1 === size){
      current.next = null;
      break;
    }
    
    if(size === counter)
      break;
    
    counter++;
    current = current.next;
  }
  return head;
}


let x = removeNthNode(new Node(1, new Node(2)), 1);
console.log(x);