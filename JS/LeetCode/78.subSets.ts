const solution = (arr: number[], visited: any) => {
    const result: number[][] = [];
    for(let i = 0; i < arr.length; i++) {
        let temp: number[] = [];
        for(let j = 0; j < arr.length; j++) {
            if (j !== i) {
                temp.push(arr[j]);
            }
        }

        result.push(temp);
        temp = [];
    }
    
    for(const item of result) {
        if (!visited[item.join(',')]) {
            solution(item, visited);
            visited[item.join(',')] = item;
        }
    }
    return [];
}


function subsets(nums: number[]): number[][] {
    const visited: Record<string, number[]> = {}
    visited[nums.join(',')] = nums;
    
    solution(nums, visited);
    
    const result: number[][] = [];
    for(const [_, value] of Object.entries(visited)) {
        result.push(value);
    }
    return result;
};