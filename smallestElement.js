function smallestElement(array, N) {
    let smallest = arr[0];
    for (let index = 0; index < array.length; index++) {
        if (smallest > array[index]) {
            smallest = array[index];
        }
    }
    return smallest
}

let arr = [7, 10, 4, 3, 20, 15]
smallestElement(arr, arr.length)