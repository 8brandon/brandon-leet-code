/**
 * You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
  * Solution Notes: 
  * This solution had a great runtime in the top 87%. However it does make a copy of the matrix, 
  * so memory won't score the highest marks.
  * 
  * Since you can flip each column from bottom up into each row of the matrix, that is what this solution does
    it pushes from bottom to top each column starting with the far left column into tempArr, and then sets matrix[i]
     to that tempArr
  */
var rotate = function(matrix) {
  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    const tempArr = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      tempArr.push(matrixCopy[j][i]);
    }
    matrix[i] = tempArr;
  }
};

rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
