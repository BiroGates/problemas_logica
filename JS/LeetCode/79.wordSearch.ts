



export const solution = (board: string[][], word: string) => {
    let found = false;
    const dfs = (acc: string, row: number,  column: number, visited: string[]) => {
        const setKerow = `${row}-${column}`;
        if (visited.includes(setKerow) || found) {
            return
        }
        visited.push(setKerow)
        
        if (column < 0 || column > board[0].length - 1 || row < 0 || row > board.length - 1) {
            return;
        }

        acc += board[row][column];
        if (acc[acc.length - 1] !== word[acc.length - 1]) {
            return;
        }


        if (acc === word) {
            console.log("FOUND!");
            found = true;
            return;
        }

        dfs(acc, row + 1, column, [...visited]);
        dfs(acc, row - 1, column, [...visited]);
        dfs(acc, row, column + 1, [...visited]);
        dfs(acc, row, column - 1, [...visited]);
    }

    for(let row = 0; row < board.length; row++){
        for(let column = 0; column < board[0].length; column++){
            dfs("", row, column, []);
        }
    }
    return found
}

const board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]]

const target = "SEE";

const column = solution(board, target);
console.log(column);