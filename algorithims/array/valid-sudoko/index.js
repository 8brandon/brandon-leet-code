/**
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
 */

/**
 * MY NOTES & THOUGHT PROCESS:
 *
 * 3 Things need to be validated to make sure that, there's only at least one of 1-9
 * in each row, column, and box.
 *
 * For Each Row you validation you could simply loop through each array, initialize a set,
 * check if the set has the item. If it does, return false. Otherwise add the item to the set.
 *
 * For each column, we need to make a set out of each index 1-9 of each array.
 *
 * For the boxes, we
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let valid = true;

  function checkRows(arr) {
    arr = arr.filter(y => Number.isInteger(parseInt(y)));
    const set = new Set();
    arr.forEach(element => {
      if (set.has(element)) {
        valid = false;
      } else {
        set.add(element);
      }
    });
  }

  function checkColumns(inputBoard) {
    for (let i = 0; i < board.length; i++) {
      const set = new Set();
      inputBoard.forEach(row => {
        if (Number.isInteger(parseInt(row[i]))) {
          if (set.has(row[i])) {
            valid = false;
          } else {
            set.add(row[i]);
          }
        }
      });
    }
  }

  function checkBoxes(arr1, arr2, arr3) {
    for (let i = 0; i < 9; i += 3) {
      const box1 = new Set();

      const a = arr1.slice(i, i + 3);
      const b = arr2.slice(i, i + 3);
      const c = arr3.slice(i, i + 3);

      let x = a.concat(b, c);

      const y = x.filter(y => Number.isInteger(parseInt(y)));

      y.forEach(element => {
        box1.add(element);
      });
      if (y.length !== box1.size) {
        valid = false;
      }
    }
  }

  checkBoxes(board[0], board[1], board[2]);
  checkBoxes(board[3], board[4], board[5]);
  checkBoxes(board[6], board[7], board[8]);

  board.forEach(element => {
    checkRows(element);
  });

  checkColumns(board);
  return valid;
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]);

var isValidSudoku = function(board) {
  let valid = true;

  function checkRows(arr) {
    const set = new Set();
    arr.forEach(element => {
      if (element !== ".") {
        if (set.has(element)) {
          valid = false;
        } else {
          set.add(element);
        }
      }
    });
  }

  function checkColumns(inputBoard) {
    for (let i = 0; i < board.length; i++) {
      const set = new Set();
      inputBoard.forEach(row => {
        if (row[i] !== ".") {
          if (set.has(row[i])) {
            valid = false;
          } else {
            set.add(row[i]);
          }
        }
      });
    }
  }

  function checkBoxes(arr1, arr2, arr3) {
    for (let i = 0; i < 9; i += 3) {
      const box1 = new Set();

      const a = arr1.slice(i, i + 3);
      const b = arr2.slice(i, i + 3);
      const c = arr3.slice(i, i + 3);

      let x = a.concat(b, c).filter(y => y !== ".");

      x.forEach(element => {
        box1.add(element);
      });
      if (x.length !== box1.size) {
        valid = false;
      }
    }
  }

  checkBoxes(board[0], board[1], board[2]);
  checkBoxes(board[3], board[4], board[5]);
  checkBoxes(board[6], board[7], board[8]);

  board.forEach(element => {
    checkRows(element);
  });

  checkColumns(board);
  return valid;
};
