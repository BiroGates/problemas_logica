
function exist(board: string[][], word: string): boolean {
    let found = false;
    function dfs([row, colunm]: number[], acc: string, letterPos: number, visited: string[]) {
        if(acc === word) {
            return true;
        }

        if (row >= 0 
            && row < board.length 
            && colunm >= 0 
            && colunm < board[0].length 
            && board[row][colunm] === word[letterPos]
            && !visited.includes(`${row}${colunm}`)
        ) {
            visited.push(`${row}${colunm}`);
            if(acc + word[letterPos] === word) {
                found = true;
            }

            if (row + 1>= 0 
                && row + 1 < board.length 
                && colunm >= 0 
                && colunm < board[0].length && board[row + 1][colunm] === word[letterPos + 1]) {
                dfs([row + 1, colunm], acc + word[letterPos], letterPos + 1, [...visited]);
            }
            if (row - 1 >= 0 
                && row - 1 < board.length 
                && colunm >= 0 
                && colunm < board[0].length && board[row - 1][colunm] === word[letterPos + 1]) {
                dfs([row - 1, colunm], acc + word[letterPos], letterPos + 1, [...visited]);
            }
            if (row >= 0 
                && row < board.length 
                && colunm + 1 >= 0 
                && colunm + 1 < board[0].length && board[row][colunm + 1] === word[letterPos + 1]) {
                dfs([row, colunm + 1], acc + word[letterPos], letterPos + 1, [...visited]);
            }
            
            if (row >= 0 
                && row < board.length 
                && colunm - 1 >= 0 
                && colunm - 1 < board[0].length && board[row][colunm - 1] === word[letterPos + 1]) {
                dfs([row, colunm - 1], acc + word[letterPos], letterPos + 1, [...visited]);
            }
            
        }


    }

    for(let row = 0; row < board.length; row++) {
        for(let column = 0; column < board[0].length; column++) {
            dfs([row, column], '', 0, []);        
            
            if (found) {
                return true
            }
        }    
    }

    
    return false;
};


const x = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB");

console.log(x);
