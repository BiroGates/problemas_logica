// More or less like this
function threeSum(nums: number[]): number[][] {
    nums = nums.sort();

    
    const result: number[][] = [];
    for(let i = 0; i < nums.length; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        if(nums[i - 1] === nums[i]) {
            continue;
        }

        while(l < r) {
            

            const sum = nums[i] + nums[l] + nums[r];
            if(sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);
            }
            

            if (sum > 0) {
                r--;
            }else {
                l++;
            }
        }
    }
    
    return result;

};

const x = threeSum([0,0,0,0]);
console.log(x);


export default threeSum;