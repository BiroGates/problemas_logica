function productExceptSelf(nums: number[]): number[] {
    const suFixSum: number[] = [];
    const preFixSum: number[] = [];
    const outPut: number[] = [];
    suFixSum[nums.length - 1] = nums[nums.length - 1];
    preFixSum[0] = nums[0];


    for(let i = 1; i < nums.length; i++) {
        preFixSum[i] = nums[i] * preFixSum[i - 1];
    }
    for(let i = nums.length - 2; i >= 0; i--) {
        suFixSum[i] = nums[i] * suFixSum[i + 1];
    }

    for(let i = 0; i < nums.length; i++) {
        outPut[i] = (preFixSum[i - 1] ?? 1) * (suFixSum[i + 1] ?? 1);
    }

    return outPut;

};