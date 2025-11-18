function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;
    while (true) {

        let h = Math.floor((l + r) / 2);

        if (nums[h] === target) {
            return h;
        }
        if (nums[l] === target) {
            return l;
        }
        if (nums[r] === target) {
            return r;
        }
        if(r - l <= 1) return -1;
        if (nums[h] < target) {
            l = h;
        }else {
            r = h;
        }
    }
};

function searchMatrix(matrix: number[][], target: number): boolean {
    for(let i = 0; i < matrix.length; i++) {
        if(search(matrix[i], target) !== -1) {
            return true;
        }
    }
    return false;
};


export default searchMatrix;