


function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[][] = [];
    const result = new Array(temperatures.length).fill(0);;
    for(let i = 0; i < temperatures.length; i++) {
        const nextPos = i + 1;
        const cur = temperatures[i];
        const next = temperatures[nextPos];
        stack.push([cur, i]);

        if (next > cur) {
            while(stack.length > 0) {
                const data = stack[stack.length - 1];
                if (!data) break;
                
                const [ value, pos ] = data;
                if (value < next) {
                    result[pos] = nextPos - pos;
                    stack.pop();
                } else {
                    break
                }
            }
        }
    }
    console.log(result);
    return result;
};

dailyTemperatures([73,74,75,71,69,72,76,73]);
