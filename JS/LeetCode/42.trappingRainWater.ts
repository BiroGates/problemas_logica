



function trap(height: number[]): number {
    let l = 0;
    let r = 0
    let temp = 0;
    while(l < height.length) {
        
        if(height[l] === 0) {
            l++;
            r = l;
            continue;
        }


        while(r < height.length) {
            if (height[l] > 0) {
                if(height[r] >= height[l] && Math.abs(r - l) > 1) {
                    console.log("PIT!");
                    l = r;
                    
                    console.log(temp);
                    break;
                }else {
                }
            }
            r++;
        }
        if(l != r) {
            l++;
            r = l;
        }
    }
    return 0;
};


const x = trap([4,2,0,3,2,5]);

console.log(x);

export default x;