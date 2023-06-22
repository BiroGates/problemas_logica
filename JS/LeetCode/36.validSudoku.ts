function checkMultiplier(index: number) {
    if (index >= 0 && index < 3) {
      return 0;
    }
    
    if (index >= 3 && index < 6) {
      return 3;
    }
  
    if (index >= 6 && index < 9) {
      return 6;
    }
  
    return -1;
  }
  
  function verifyBlock(board: string[][], target: string, targetPos: number[]) {
    const row = (targetPos[0]) - (targetPos[0] - checkMultiplier(targetPos[0]));
    const column = (targetPos[1]) - (targetPos[1] - checkMultiplier(targetPos[1]));
  
    for(let i = row; i < row + 3; i++) {
      for(let j = column; j < column + 3; j++) {
        if (board[i][j] === target && targetPos[0] !== i && targetPos[1] !== j) {
          console.log(`Falset at row: ${targetPos[0]} Column: ${targetPos[1]}`);
          return false;
        } 
      } 
    }
    return true;
  }
  
  function verifyRowColumn(board: string[][], target: string, targetPos: number[]) {
    const row = targetPos[0];
    const column = targetPos[1];
  
    for (let i = 0; i < board[0].length; i++) {
      if (board[row][i] === target && column !== i) {
        return false;
      }
    } 
  
    for(let j = 0; j < board.length; j++) {
      if (board[j][column] === target && row !== j) {
        return false;
      }
    }
  
    return true;
  }
  
  
  function isValidSudoku(board: string[][]): boolean {
    let x = true;
    for (let i = 0; i < board[0].length; i++) {
      for(let j = 0; j < board.length; j++) {
        if (board[i][j] === '.') {
          continue;
        }
        x = verifyRowColumn(board, board[i][j], [i,j]);
        if (x === false) {
          return false;
        }
        
        x = verifyBlock(board, board[i][j], [i,j]);
        if (x === false) {
          return false;
        }
  
      }
    }
    
    return x;
  };
  