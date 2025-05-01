






function generateParenthesis(n: number): string[] {
    function dfs(acc: string, stack: string[], arr: string[], open: number) {
        const l = acc[acc.length - 1];
        if (l === ')') {
            stack.pop();
        }

        if (l === '(') {
            open++;
            stack.push('(');
        }

        if(acc.length === n * 2) {
            if (stack.length === 0 && !set.has(acc) && open === n) {
                arr.push(acc);
                set.add(acc);
            }
            return;
        }

        dfs(acc.concat('('), stack.slice(), arr, open);
        dfs(acc.concat(')'), stack.slice(), arr, open);
        
    }
    
    const stack: string[] = [];
    const arr: string[] = [];

    const set = new Set<string>();

    dfs('(', stack.slice(), arr, 0);

    return arr;
};


const x = generateParenthesis(3);

console.log(x);

export default generateParenthesis;