const newArr = [1, 3, 5, 6, 7, 8, 9, 15, 19, 25, 27, 29, 40, 42]

function binarySearch(harr, hvalue) {
    let start = 0;
    let end = harr.length - 1;
    let mid = Math.round(end / 2)

    function main(arr, value) {
        if (value === arr[mid]) return mid;
        else if (end == mid || start == mid) return -1
        else if (value < arr[mid]) {
            end = mid - 1
            mid = Math.round(end / 2)
            return main(arr, value)
        } else if (value > arr[mid]) {
            start = mid + 1
            mid = Math.round((end + mid) / 2)
            return main(arr, value)
        }
        return -1;
    }
    return main(harr, hvalue)
}

const index = binarySearch(newArr, 27)
console.log(index)
