// Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 

// Example 1:

// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17 
// as it is greater than all the elements
// to its right.  Similarly, the next 
// leader is 5. The right most element 
// is always a leader so it is also 
// included.


// Example 2:

// Input:
// n = 5
// A[] = {1,2,3,4,0}
// Output: 4 0


function findLeaders(A) {
    const n = A.length;
    let maxRight = A[n - 1]; // Rightmost element is always a leader
    const leaders = [maxRight]; // Initialize the leaders array with the rightmost element

    // console.log(maxRight, leaders, 'asdfafsdf',)
    for (let i = n - 2; i >= 0; i--) { 
        if (A[i] >= maxRight) {
            // Current element is greater than or equal to the maximum element encountered so far
            maxRight = A[i]; // Update the maximum element
            leaders.unshift(maxRight); // Add the leader to the beginning of the array
        }
    }

    return leaders; // Return the array of leaders
}

let arr = [18, 22, 36, 4, 7, 3]
// console.log(
findLeaders(arr)
// )

// ROUGH
// function leader(array, N) {
//     let leaders = {}
//     for (let i = 0; i < array.length; i++) {
//         leaders[array[i]] = extractLeaders(array[i], array, i)
//     }
//     return Object.keys(leaders)?.filter(ele => !leaders[ele]?.includes(false))
// }

// function extractLeaders(key, array, index) {
//     let tempLeaders = [];
//     for (let i = index; i < array.length; i++) {
//         if (key >= array[i])
//             tempLeaders.push(true)
//         else tempLeaders.push(false)
//     }
//     return tempLeaders
// }

// let arr = [18, 22, 36, 4, 7, 3]
// console.log(
//     leader(arr, arr.length)
// )