export function balancedParens(n) {
  const r = [];
  const s = [];
  
  const dfs = (str, stack) => {
    if(str[str.length -1] === ')') {
        const x = stack.pop();
        if(!x) return;
    }

   
    if (Math.floor(str.length) / 2 >= n) {
      if (stack.length === 0) {
        r.push(str);
      }
      return;
    }
    
    let o = str + '(';
    let c = str + ')';
    dfs(o, [...stack, '(']);
    dfs(c, [...stack]);
  }

  dfs('', s);
  console.log(r);
  return r;
}

balancedParens(2);