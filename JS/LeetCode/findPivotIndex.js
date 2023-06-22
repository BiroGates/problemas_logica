function findPivot(arr) {
  for(let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // Sum left
    for(let j = i; j >= 0; j--){
      if(i === 0)
        leftSum = 0;
      else if(j !== i)
        leftSum += arr[j];
    }
    // Sum right
    for(let j = i; j < arr.length; j++) {
      if(i === arr.length - 1)
        rightSum = 0;
      else if(j !== i)
        rightSum += arr[j];
    }


    if(leftSum === rightSum)
      return i;
  }
  return -1;
}

let x = findPivot([1,7,3,6,5,6]);
 
console.log(x);

//   
//  1,7,3,6,5,6
//      
//      
//      
//    
//  

