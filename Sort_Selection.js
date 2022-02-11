const newArr = [19, 10, 8, 17, 9];

function selectionSort(arr) {
    let i = 0;
    let j = i + 1;
    let current = arr[i];
    let currentInd = j;

    function swap(arr, ind1, ind2) {
        let temp = arr[ind1];
        arr[ind1] = arr[ind2];
        arr[ind2] = temp;
    }

    function sortRecursion(arr) {
        if (i < arr.length - 1) {
            if (j < arr.length) {
                if (current > arr[j]) {
                    current = arr[j]
                    currentInd = j
                }
                j++
                return sortRecursion(arr)
            }
            swap(arr, i, currentInd)
            i++
            current = arr[i]
            j = i + 1
            currentInd = i;
            return sortRecursion(arr)
        }
        return arr
    }
    return sortRecursion(arr)
}

const sorted = selectionSort(newArr)

console.log(sorted)

