function countUniqueValues(arr) {
    let i = 0
    let j = 1
    while (j < arr.length) {
        if (arr[i] === arr[j]) j++
        if (arr[i] < arr[j]) {
            i++
            arr[i] = arr[j]
            j++
        }
    }
    return i + 1
}

console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 5]))

