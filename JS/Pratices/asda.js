let regular = / In /gi;
let text = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`

let numbers = [2, 4, 1, 10];
let max = numbers[0];
let mid = numbers[0];
let min = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max) max = numbers[i];
    if(numbers[i] < min) min = numbers[i];
}
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > mid && numbers[i] != max) mid = numbers[i];

}

let obj = {
    a: '1',
    b: '2'
}

console.log('=========');
console.log(max);
console.log(mid);
console.log(min);