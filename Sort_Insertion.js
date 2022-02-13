let newArr = [19, 10, 8, 17, 9, 53, 12, 99, 1];

function insertionSort(arr) {
    let i = 0;
    let j = i + 1;
    let toFirstInd = 0;

    function sortRecursion(arr) {
        if (j < arr.length) {
            if (arr[i - toFirstInd] > arr[j]) {
                if (i - toFirstInd === 0) {
                    arr.splice(i - toFirstInd, 0, arr[j]);
                    arr.splice(j + 1, 1)
                    i++
                    j++
                    return sortRecursion(arr)
                }
                toFirstInd++
                return sortRecursion(arr)
            }
            arr.splice(i - toFirstInd + 1, 0, arr[j]);
            arr.splice(j + 1, 1)
            toFirstInd = 0
            i++
            j++
            return sortRecursion(arr)
        }
        return arr;
    }
    return sortRecursion(arr)
}

const sortedArr = insertionSort(newArr)
console.log(sortedArr)