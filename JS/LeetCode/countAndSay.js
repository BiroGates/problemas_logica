// https://leetcode.com/problems/count-and-say/
function countAndSay(n) {
    if (n === 1) {
        return '1';
    } else {
        // Getting the Previous Stack value
        let numeros = '';
        numeros += countAndSay(n - 1);
        numeros = numeros.split('').filter(item => item !== ',');

        // Getting how many times the number repeats before another number appears
        let counter = 0;
        let result = '';
        for(let i = 0; i < numeros.length; i++) { 
            if(numeros[i] !== numeros[i + 1]) {
                counter++;
                result += `${counter}` + `${numeros[i]}`;
                counter = 0;
            } else counter++;
        }
        return result;
    }
}

console.log(countAndSay(4));


