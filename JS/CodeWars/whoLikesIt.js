// Big O(1);
function likes(arr) {
    if(!arr.length) return 'no one likes this';
    if(arr.length == 1) return `${arr[0]} likes this`; 
    if(arr.length == 2) return `${arr[0]} and ${arr[1]} like this`; 
    if(arr.length == 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`; 
    if(arr.length >= 4) return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
}
console.log(likes(["Jacob", "Alex"]));