

function isValid(s: string): boolean {
    const stack: string[] = [];
    const inverse: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for(const c of s) {
        if(c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            if(inverse[c] !== stack.pop()) {
                return false;
            }
            
        }
        
    }
    return stack.length === 0;
};