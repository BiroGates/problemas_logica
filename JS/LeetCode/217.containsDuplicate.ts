


// using a SET would be the best approach, it is already optimized to deal with duplicated values.
export const solution = (nums: number[]): boolean => {
    const map = new Map<string, boolean>();
    for (const n of nums)  {
        const sn = `${n}`;
        if(!map.get(sn)) {
            map.set(sn, true);
        } else {
            return true;
        }
    }
    return false;
}

solution([1,2,3,1]);