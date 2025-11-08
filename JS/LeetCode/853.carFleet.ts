

function carFleet(target: number, position: number[], speed: number[]): number {
    const newArray = position.map((item, index) => {
        return [item, speed[index]];
    });
    const arr = newArray.sort((a, b) => { return a[0] - b[0] }).reverse();
    const stack: number[] = [];


    arr.forEach(([pos, speed]) => {
        const calc = (target - pos) / speed;
        
        if(!stack.length) {
            stack.push(calc);
        }else if(stack[stack.length - 1] < calc) {
            stack.push(calc);
        }
    });

    return stack.length;
};


const x = carFleet(12, [10,8,0,5,3], [2,4,1,1,3]);
console.log(x);

export default carFleet;