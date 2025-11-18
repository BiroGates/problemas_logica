



function searchInsert(nums: number[], target: number): number {
    const binarySearch = (left: number, right: number, target: number) => {
        if(target === nums[right])
            return right;

        if(target === nums[left])
            return left;

        const mid = Math.floor((right + left) / 2);

        if (nums[left] > target) {
            return left;
        }

        if (nums[right] < target) {
            return right+1;
        }

        if (target < nums[mid]) {
            left++;
            return binarySearch(left, mid, target);
        }else {
            right--;
            return binarySearch(mid, right, target);
        }
    }; 


    return binarySearch(0, nums.length - 1, target);
};


console.log(searchInsert([1,3,5,6], 2))
