


function solve(board: string[][]): void {
    let visited: number[][] = [];
    const set = new Set();
    let flag = true;
    function dfs(row: number, column: number): any {
        if (row > board.length - 1 || row < 0 || column > board[0].length - 1 || column < 0) {
            flag = false;
            return;
        }
        if (board[row][column] === "O" && !set.has(`${row}-${column}`)) {
            visited.push([row, column]);
            set.add(`${row}-${column}`);
            dfs(row + 1, column);
            dfs(row - 1, column);
            dfs(row, column + 1);
            dfs(row, column - 1);
            
            if(flag && row === visited[0][0] && column === visited[0][1]) {
                for(const [x, y] of visited) {
                    board[x][y] = `X`;
                }
            }
        }
    }

    for(let row = 0; row < board.length; row++) {
        for(let column = 0; column < board[0].length; column++) {
            dfs(row, column);
            visited = []
            flag = true;
        }   
    }
    console.log(board);
};

solve([["O","X","O","O","X","X","X","O","O","O","O","O","X","O","O","O","O","X","O","X"],["X","O","X","O","O","X","X","O","O","X","O","X","O","X","O","X","X","O","O","O"],["O","X","O","O","O","X","X","X","X","O","O","O","O","O","X","X","X","X","O","X"],["X","X","O","O","O","X","X","O","O","O","X","X","X","O","O","X","O","X","X","O"],["O","X","O","X","X","O","X","O","O","O","X","O","O","X","O","O","O","O","O","X"],["X","O","O","X","O","X","O","O","O","X","X","O","X","O","O","X","O","O","O","O"],["X","O","O","O","X","X","O","O","O","O","O","X","O","O","X","O","O","O","O","X"],["X","O","O","O","X","O","X","X","X","O","X","O","X","X","X","X","O","O","O","X"],["X","O","O","X","O","O","O","X","O","O","O","O","O","O","O","O","O","X","O","X"],["O","O","O","X","O","X","X","X","X","X","X","X","X","X","O","O","O","O","X","O"],["X","O","X","O","X","O","O","X","X","X","O","X","X","O","O","X","X","O","O","O"],["O","X","O","O","X","O","O","O","O","O","O","X","X","X","X","O","O","O","X","O"],["X","O","O","O","X","X","X","O","X","O","O","O","X","O","X","O","X","O","O","X"],["O","O","O","O","X","O","X","X","O","X","O","X","O","X","X","X","X","O","O","O"],["O","X","X","O","O","O","O","X","O","O","X","X","X","O","O","X","X","O","X","O"],["X","O","X","X","X","X","X","X","O","X","X","O","X","O","O","X","O","O","O","X"],["X","O","O","O","X","O","X","O","O","X","O","X","O","O","X","O","O","X","X","X"],["O","O","X","O","O","O","O","X","O","O","X","X","O","X","X","X","O","O","O","O"],["O","O","X","O","O","O","O","O","O","X","X","O","X","O","X","O","O","O","X","X"],["X","O","O","O","X","O","X","X","X","O","O","X","O","X","O","X","X","O","O","O"]])