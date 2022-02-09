const newArr = [1, 3, 5, 6, 7, 8, 9, 15, 19, 25, 27, 29, 40, 42]

function helper(harr, hvalue) {
    let start = 0;
    let end = harr.length - 1;
    let mid = Math.round(end / 2)
    function binarySearch(arr, value) {
        if (value === arr[mid]) return mid;
        else if (end == mid || start == mid) {
            if(value===arr[start]) return start;
            return -1
        }
        else if (value < arr[mid]) {
            end = mid
            mid = Math.round(end / 2)
            return binarySearch(arr, value)
        } else if (value > arr[mid]) {
            start = mid
            mid = Math.round((end + mid) / 2)
            return binarySearch(arr, value)
        } else {
            return -1;
        }

    }
    return binarySearch(harr, hvalue)
}

console.log(helper(newArr,15))
