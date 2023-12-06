// Given an array of penalties fine[], an array of car numbers car[], and also the date. The task is to find the total fine which will be collected on the given date. Fine is collected from odd-numbered cars on even dates and vice versa.

// Example 1:

// Input:
// N = 4, date = 12
// car[] = {2375, 7682, 2325, 2352}
// fine[] = {250, 500, 350, 200}
// Output:
// 600
// Explantion:
// The date is 12 (even), so we collect the
// fine from odd numbered cars. The odd
// numbered cars and the fines associated
// with them are as follows:
// 2375 -> 250
// 2325 -> 350
// The sum of the fines is 250+350 = 600


// Example 2:

// Input:
// N = 3, date = 8
// car[] = {2222, 2223, 2224}
// fine[] = {200, 300, 400}
// Output:
// 300


// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function totalFine() which takes the array car[] and fine[] its size N and an integer date as inputs and returns the total fine.



// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)


function searchFine(n, date, car, fine) {
    let isDateEven = date % 2 === 0;
    let totalFine = 0;
    for (let i = 0; i < car.length; i++) {
        if (isDateEven) {
            if (car[i] % 2 !== 0) {
                totalFine += fine[i]
            }
        }
        else totalFine += fine[i]
    }
    return totalFine
}

// let car = [2375, 7682, 2325, 2352];
// let fine = [250, 500, 350, 200];
// let date = 12;
let car = [2222, 2223, 2224];
let fine = [200, 300, 400];
let date = 8

searchFine(3, date, car, fine)


//OPTIMIZED
// function totalFine(N, date, car, fine) {
//     let totalFine = 0;

//     for (let i = 0; i < N; i++) {
//         const isOddCar = car[i] % 2 !== 0;
//         const isEvenDate = date % 2 === 0;

//         if ((isOddCar && !isEvenDate) || (!isOddCar && isEvenDate)) {
//             totalFine += fine[i];
//         }
//     }

//     return totalFine;
// }