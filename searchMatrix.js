// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
// Input: 
// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// target = 3
// Output: true

//OPTIMIZED:


function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const numRows = matrix.length;
    const numCols = matrix[0].length;

    let left = 0;
    let right = numRows * numCols - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / numCols)][mid % numCols];
        console.log(midValue, 'mval', mid, Math.floor(mid / numCols))

        return
        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

let matrix = [
    [1, 3, 5, 7],
    [10, 12, 16, 20],
    [23, 30, 34, 60]
];

let result = searchMatrix(matrix, 3)
// console.log(result, 'RESULT')

//ROUGH
// function twoDArray(matrix, target) {
//     // console.log(matrix, matrix.length)
//     let result = false;
//     for (let i = 0; i < matrix.length; i++) {
//         result = checkForTarget(matrix[i], target);
//         if (result) return result
//     }
//     return false
// }

// function checkForTarget(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         if (matrix[i] === target)
//             return true
//     }
//     return false
// }

// let matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60]
// ];

// let result = twoDArray(matrix, 34242343)
// console.log(result, 'RESULT')