function runningSum(nums) {
  let newArr = [];
  for(let i = 0; i < nums.length; i++) {
    if(i === 0)
       newArr = [...newArr, nums[i]];
    else
      newArr = [...newArr, nums[i] + newArr[i - 1]];
  }
  return newArr;
  
}


let x = runningSum([1,2,3,4]);
console.log(x);