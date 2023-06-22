function topKFrequent(nums: number[], k: number): number[] {
    const bucketArray: number[][] = new Array(nums.length + 1);
    const counts: Record<string, number>  = {};
    const result: number[] = [];
    let count: number = 0;
    
    if(nums.length === 0) return [];
    
    for(let i = 0; i < nums.length; i++) {
        const key = nums[i].toString();
        counts[key] = (counts[key] || 0 ) + 1;
    }
    
    for(const [key, value] of Object.entries(counts)) {
        if(!bucketArray[value]) {
          bucketArray[value] = [Number(key)];
        } else {
          bucketArray[value].push(Number(key));
        }
    }
    
    for(let i = bucketArray.length; i > 0; i--) {
        if(!bucketArray[i]) {
          continue;
        }
    
        for(let j = 0; j < bucketArray[i].length; j++) {
            if(count < k) {
                result.push(bucketArray[i][j]); 
                count++;
            }
        }
    }
    
    return result;
};