






function twoSum(numbers: number[], target: number): number[] {
    let r = 0;
    let l = numbers.length - 1;

    
    while(r < l) {
        const sum = numbers[l] + numbers[r];
        if(sum === target) {
            break;
        }

        if (sum < target) {
            r++;
        }else {
            l--
        }

    }

    return [r + 1, l + 1];
};

const x = twoSum([2,3,4], 6);

console.log(x);

export default twoSum;