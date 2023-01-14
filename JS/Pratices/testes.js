function reOrder(item, pos, arr) {
  if(pos === 0){
    let swap = arr[pos];
    arr[pos] = arr[1];
    arr[1] = swap;
  }
  return arr[pos];
}

let before = "2022-12-26T15:52:23.979Z".substring(0, 10).split('-').reverse().map(reOrder).join('/');
let now = new Date().toLocaleDateString().substring(0, 10).split('/').map(reOrder).join('/');


console.log(before);
console.log(now)


const diffTime = Math.abs(new Date(before) - new Date(now));
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays + " days");