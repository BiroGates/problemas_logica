


const topKFrequent = (nums: number[], k: number): number[] => {
  const bucket: number[][] = new Array(nums.length + 1).fill(0).map(() => []);
  const count = new Map<string, number>();
  const solution: number[] = [];

  for(let i = 0; i < nums.length; i++) {
    const key = `${nums[i]}`;
    
    if(!count.get(key))
      count.set(key, 1);
    else
      count.set(key, count.get(key) as unknown as number + 1);
  }

  for(const [key, value] of count) {
    bucket[value].push(Number(key))
  }

  for(let i = nums.length; i >= 0; i--) {
    if (!bucket[i].length)
      continue

    if (solution.length === k) {
      return solution;
    }

    for(let j = 0; j < bucket[i].length; j++) {
      solution.push(bucket[i][j]);
    }
  }
  return solution;
};

console.log(topKFrequent([1], 2));