let newArr = [2, 1, 6, 9, 3, 5, 11, 4];

function mergeSort(arr) {
    let i = 0;
    let j = 0;
    let arr3 = [];

    function merge(arr1, arr2) {
        if (i < arr1.length || j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                arr3.push(arr1[i])
                i++
            } else if (arr1[i] > arr2[j]) {
                arr3.push(arr2[j])
                j++
            } else if (i === arr1.length && j < arr2.length) {
                arr3.push(arr2[j])
                j++
            } else if (j === arr2.length && i < arr1.length) {
                arr3.push(arr1[i])
                i++
            }
            return merge(arr1, arr2)
        }
        i = 0
        j = 0
        const arr4 = [...arr3]
        arr3 = []
        return arr4
    }

    function sortrecursion(arr) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2)
        let left = sortrecursion(arr.slice(0, mid))
        let right = sortrecursion(arr.slice(mid))
        return merge(left, right)
    }

    return sortrecursion(arr)
}

const sortedArr = mergeSort(newArr)

console.log(sortedArr)