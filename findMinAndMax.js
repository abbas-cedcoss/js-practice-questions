function getMinMax(arr) {
    let minElement = 0;
    let maxElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return [minElement, maxElement];
}

// Example 1
let arr1 = [3, 2, 1, 56, 167];
let result1 = getMinMax(arr1);
console.log("Min", result1[0], "Max", result1[1]);
