//Min number of jumps
function minJumps(array, n) {
    let jumpsCount = 0;
    let index = 0
    for (index = 0; index < array.length;) {
        index += array[index];
        jumpsCount += 1;
    }
}


minJumps([
    1, 5, 8, 9, 2, 6, 1, 6, 8, 9
], 11)

// MISSING NUMBER
// function findMissingElement(N, arr) {
//     let xorSum = 0;

//     for (let i = 1; i <= N; i++) {
//         xorSum ^= i;
//         console.log(xorSum, 'xorSum');
//     }

//     for (let i = 0; i < arr.length; i++) {
//         xorSum ^= arr[i];
//     }

//     return xorSum;
// }

// let N = 10;
// let arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];

// let missingElement = findMissingElement(N, arr);
// console.log(missingElement);


// SUM OF RANGE
// function subarraySum(arr = [], key) {
//     let test = {}
//     if (arr.length) {
//         for (var i = 0; i < arr.length; i++) {
//             test[arr[i]] = sumThemUp(arr, i, key)
//             if (test[arr[i]]?.['found']) {
//                 return test[arr[i]]['subArry'];
//             }
//         }
//     }
// }

// function sumThemUp(arr, index, key) {
//     let data = {
//         subArry: [],
//         found: false,
//         sum: 0
//     }
//     for (var i = index; i < arr.length; i++) {
//         if (data.sum !== key) {
//             data.sum += arr[i];
//             data.subArry.push(arr[i])
//         }
//         else {
//             data = {
//                 ...data,
//                 found: true
//             }
//         }
//     }
//     return {
//         ...data,
//         subArry: [arr.indexOf(data?.subArry[0]) + 1, arr.indexOf(data?.subArry[data?.subArry?.length - 1]) + 1],
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(subarraySum(arr, 15))