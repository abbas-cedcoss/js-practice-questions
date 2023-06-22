// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Example 1:

// Input: 
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.
// Example 2:

// Input: 
// N = 3
// arr[] = {0 1 0}
// Output:
// 0 0 1
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.

function sort012(arr, N) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

let arr = [0, 2, 1, 2, 0]
sort012(arr, 5)