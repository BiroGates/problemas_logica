function maxArea(height: number[]): number {
    let r = height.length - 1;
    let l = 0
    let max = 0;

    while(l < r) {
        const minHeigh = Math.min(height[l], height[r]);
        const horizontalDiff = Math.abs(l - r);
        
        const sum = minHeigh  * horizontalDiff;

        if(sum > max) {
            max = sum;
        }

        if (minHeigh === height[l]) {
            l++;
        } else {
            r--;
        }

    }

    return max;
};

const x = maxArea([3,6,1]);
console.log(x);

export default maxArea;