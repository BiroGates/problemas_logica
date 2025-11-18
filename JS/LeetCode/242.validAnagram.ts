






export const solution = (s1: string, s2: string) => {
    if(s1.length !== s2.length) return false;

    const arr = Array(26).fill(0);

    for(let i = 0; i < s1.length; i++) {
        arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return arr.every(n => n === 0);
}