// OPTIMIZED
function findDuplicates(a, n) {
    let duplicates = [];
  
    for (let i = 0; i < n; i++) {
      let index = Math.abs(a[i]);
  
      if (a[index] >= 0) {
        a[index] = -a[index];
      } else {
        duplicates.push(index);
      }
    }
  
    if (duplicates.length === 0) {
      return [-1]; // No duplicates found
    } else {
      return duplicates.sort((a, b) => a - b); // Sort duplicates in ascending order
    }
  }

// ROUGH
// function duplicates(a, N) {
//     let counts = {};
//     let duplicates = [];
//     for (let index = 0; index < N; index++) {
//         counts[a[index]] = (counts[a[index]] || 0) + 1;
//         if (counts[a[index]] > 1 && !duplicates.includes(counts[a[index]]))
//             duplicates.push(a[index])
//     }
//     return duplicates.sort(function (a, b) { return a - b })
// }

let arr = [13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4, 25, 14, 23, 14];

console.log(
    findDuplicates(arr, arr.length)
); 