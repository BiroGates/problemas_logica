




class MinStack {
    minStack: number[] = []
    minGlobal = Infinity;
    stack: (number | null)[] = [];
    constructor() {}

    push(val: number | null): void {
        this.stack.push(val);
        if(val !== null && val < this.minGlobal) {
            this.minGlobal = val;
        }
        this.minStack.push(this.minGlobal);

    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
        if(this.stack.length === 0) {
            this.minGlobal = Infinity;
        }
        const key = this.minStack[this.minStack.length - 1];
        if (key !== null && key !== undefined) {
            this.minGlobal = key;
        }
        
    }

    top(): number | null {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

class Helper {
    problem = new MinStack();
    
    readInput(commands: string[], param: number[][]) {
        let output = '';
        for(let i = 0; i < commands.length; i++) {
            const command = commands[i];
            switch (command) {
                case 'push': {
                    this.problem.push(param[i][0]);
                    output += 'null,'
                    break;
                } 
                case 'pop' : {
                    this.problem.pop();
                    output += 'null,'
                    break;
                }
                case 'top' : {
                    const x = this.problem.top();
                    if(x !== null) {
                        output += `${x},`;
                    }else {
                        output += 'null,'
                    }
                    break;
                }
                case 'getMin' : {
                    const x = this.problem.getMin();
                    if(x !== null) {
                        output += `${x},`;
                    }else {
                        output += 'null,'
                    }
                    break;
                }
            }
        }
        console.log(output);
    }
}


const y = new Helper();
y.readInput(["push","push","getMin","getMin","push","getMin","getMin","top","getMin","pop","push","push","getMin","push","pop","top","getMin","pop"], [[-10],[14],[],[],[-20],[],[],[],[],[],[10],[-7],[],[-7],[],[],[],[]]);


export default MinStack;