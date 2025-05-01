






function handleOperation(a: number, b: number, operator: string) {
    let x = 0;
    switch(operator) {
        case "+": 
            x += a + b;
            break;
        case "-": 
            x += b - a;
            break;
        case "/": 
            x += Math.trunc(b / a);
            break;
        case "*": 
            x += a * b;
            break;
    }
    return x;
}



function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for(let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if(!isNaN(Number(token))) {
            stack.push(Number(token));
        } else {
            const a = stack.pop();
            const b = stack.pop();
            const op = handleOperation(a ?? 0, b ?? 0, token);
            stack.push(op);
        }
    }

    return stack[0];
};

const x = evalRPN(["4","13","5","/","+"]);
console.log(x);

export default evalRPN;
