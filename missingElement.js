// Vaibhav likes to play with numbers and he has N numbers. One day he was placing the numbers on the playing board just to count that how many numbers he has. He was placing the numbers in increasing order i.e. from 1 to N. But when he was putting the numbers back into his bag, some numbers fell down onto the floor. He picked up all the numbers but one number, he couldn't find. Now he has to go somewhere urgently, so he asks you to find the missing number.
// NOTE: Don't use Sorting

// Example 1:

// Input:                                                       
// N = 4                                        
// A[] = {1, 4, 3}
// Output:
// 2     
// Explanation:
// Vaibhav placed 4 integers but he picked
// up only 3 numbers. So missing number
// will be 2 as it will become 1,2,3,4.


// Example 2:

// Input:                        
// N = 5
// A[] = {2, 5, 3, 1}
// Output:
// 4
// Explanation:
// Vaibhav placed 5 integers on the board,
// but picked up only 4 integers, so the
// missing number will be 4 so that it
// will become 1,2,3,4,5.

function findMissingNumber(N, A) {
    const expectedSum = (A * (A + 1)) / 2;

    const actualSum = N.reduce((sum, num) => {
        if (num !== undefined) {
            return sum + num
        }
    }, 0);

    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

// Example 1
const N1 = 4;
const A1 = [1, 4, 3];
const result1 = findMissingNumber(A1, N1);
console.log("Output 1:", result1); // Output: 2