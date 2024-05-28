const inArea = (board, i, j) => i >= 0 && i < board.length && j >= 0 && j < board[0].length;

const dfs = (board, i, j) => {
  if (!inArea(board, i, j) || board[i][j] !== 'O') return;
  board[i][j] = 'P';
  dfs(board, i - 1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);
};

const solve = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if ((i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) && board[i][j] === 'O') {
        dfs(board, i, j);
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === 'P') {
        board[i][j] = 'O';
      }
    }
  }
};
