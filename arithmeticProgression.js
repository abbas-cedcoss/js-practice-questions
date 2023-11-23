// Find the missing element from an ordered array arr[], consisting of N elements representing an Arithmetic Progression(AP).
// Note: There always exists an element which upon inserting into sequence forms Arithmetic progression. Boundary elements (first and last elements) are not missing.

// Example 1:

// Input:
// N = 6
// Arr[] = {2, 4, 8, 10, 12, 14}
// Output: 6
// Explanation: Actual AP should be 
// 2, 4, 6, 8, 10, 12, 14.

// Example 2:

// Input:
// N = 6
// Arr[] = {1, 6, 11, 16, 21, 31}
// Output: 26
// Explanation: Actual AP should be 
// 1, 6, 11, 16, 21, 26, 31.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function findMissing() which takes the array of integers arr[] and its size n as input parameters and returns an integer denoting the answer.


// Expected Time Complexity: O(logN)
// Expected Auxiliary Space: O(1)


// Constraints:
// 2 <= N <= 105
// 0 <= |Arr[i]| <= 107
// There will always be only one missing element.


// function findMissing(arr, n) {
//     // Calculate the common difference
//     const d = Math.floor((arr[n - 1] - arr[0]) / n);

//     // Binary search to find the missing element
//     let left = 0;
//     let right = n - 1;

//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);

//         console.log(mid, 'mid', arr[mid], left, right)
//         // If the element at index mid is not missing, update the search range
//         if (arr[mid] === arr[0] + mid * d) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     // The missing element is found at arr[left]
//     return arr[0] + left * d;
// }

// Example usage:
// const arr1 = [2, 4, 8, 10, 12, 14];
// const n1 = arr1.length;
// console.log(findMissing(arr1, n1));  // Output: 6

// const arr2 = [19, 27, 31];
// const n2 = arr2.length;
// console.log(findMissing(arr2, n2));  // Output: 26


function findMissing(arr, n) {
    if (arr && arr.length) {
        let result = '';
        let diff = Math.floor((arr[n - 1] - arr[0]) / n);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] != undefined && arr[i + 1] - arr[i] !== diff) {
                result = arr[i] + diff;
            }
        }
        return result
    }
    return -1
}


let arr = [
    // 2, 4, 8, 10, 12, 14
    // 3, 6, 9, 12, 18,
    // 1, 6, 11, 16, 21, 31
    // 35, 50, 80
    // 19, 27, 31,
    -28, 0, 14, 28, 42
];

findMissing(arr, arr?.length);
