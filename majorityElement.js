// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.

// Example 1:

// Input:
// N = 3 
// A[] = {1,2,3} 
// Output:
// -1
// Explanation:
// Since, each element in 
// {1,2,3} appears only once so there 
// is no majority element.
// Example 2:

// Input:
// N = 5 
// A[] = {3,1,3,3,2} 
// Output:
// 3
// Explanation:
// Since, 3 is present more
// than N/2 times, so it is 
// the majority element.

//OPTIMISED
function majorityElement(a, size) {
    const counts = {};

    for (let index = 0; index < size; index++) {
        counts[a[index]] = (counts[a[index]] || 0) + 1;
        if (counts[a[index]] > size / 2) {
            return a[index];
        }
    }
    return -1; // No majority element found
}

let arr = [3, 1, 3, 3, 2];

console.log(
    majorityElement(arr, arr.length)
);



//Rough
// function majorityElement(a, size) {

//     for (let index = 0; index < size; index++) {
//         if (a.indexOf(a[index]) !== a.lastIndexOf(a[index]))
//             return a[index]
//     }

//     return -1
// }

// let arr = [6, 1, 15, 19, 9, 13, 12, 6, 7, 2, 10, 4, 1, 14, 11, 14, 14, 13];

// console.log(
//     majorityElement(arr, arr.length)
// )


// In this updated code, we use an object called counts to keep track of the frequency of each element in the array. As we iterate through the array, we increment the count for each element. If we find an element with a count greater than N/2, we consider it the majority element and return it. If the loop finishes without finding a majority element, we return null to indicate that there is no majority element in the array.

// Please note that the code assumes that N is the length of the array you want to analyze. If you want to use a different value for N, make sure to adjust the code accordingly.




// Initialize arr with the array [3, 1, 3, 3, 2].

// Call the majorityElement function with arr and arr.length.

// Inside the majorityElement function:

// Create an empty object called counts.
// Set the value of N to be equal to arr.length, which is 5 in this case.
// Start a loop where index goes from 0 to 4.
// In the first iteration, index is 0.
// Retrieve the element at index 0 of the array, which is 3.
// Check if 3 exists as a key in the counts object. Since it doesn't, the expression (counts[element] || 0) evaluates to 0.
// Increment the count for 3 in the counts object by 1. Now counts becomes { 3: 1 }.
// Check if the count of 3 is greater than N / 2 (which is 2.5 in this case). Since 1 is not greater than 2.5, no action is taken.
// Continue to the next iteration.
// Repeat the above steps for each element in the array.
// After the loop finishes, return null because no majority element was found.
// The value returned from the majorityElement function is null.

// Finally, the console.log statement prints null to the console.

// In this case, since there is no majority element (an element that appears more than half of the array's length), the code correctly returns null.