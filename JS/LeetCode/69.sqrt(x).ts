


function mySqrt(x: number): number {
    const maxLength = 46340;
    const arr = Array.from({ length: 46340 }).map((_, index) => {
        return index + 1;
    });

    if (x === 0) {
        return 0;
    }

    let l = 0;
    let r = maxLength - 1;
    

    while(l <= r) {
        const midIndex = Math.floor((l + r) / 2);
        const midSum = Math.floor(arr[midIndex] ** 2);
        
        if (midSum === x) {
            return arr[midIndex];
        }

        if (midSum < x) {
            l = midIndex + 1;
        } else {
            r = midIndex - 1;
        }
    }

    return arr[r];
};

console.log(mySqrt(4));