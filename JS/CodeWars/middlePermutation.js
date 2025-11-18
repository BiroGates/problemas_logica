// Not passed
export function middlePermutation(s) {
    const hash = {};
    const r = [];
    for (let i = 0; i < s.length; ++i) {    
        const char = s[i];
        hash[char] = [];
        for (let j = 0; j < s.length; ++j) {
            if (s[j] !== char) {
                hash[char].push(s[j]);
            }
        }  
    }
    
    const dfs = (mountedStr, key, visited) => {
        mountedStr += key;
        const adj = hash[key];
        visited.add(key);
        for (const c of adj) {
            if(visited.has(c)) {
                continue;
            }
            dfs(mountedStr, c, new Set(visited.values()));
        }
        if (mountedStr.length === s.length) {
            r.push(mountedStr);
        }
    };

    for(const [key, _] of Object.entries(hash)) {
        dfs("", key, new Set());
    }
    return r[Math.floor(r.length / 2) - 1];
}

const x = middlePermutation('abc');
console.log(x);