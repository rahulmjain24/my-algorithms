let newArr = [34, 21, 54, 14, 65, 23];

function bubbleSort(arr) {
    let i = arr.length - 1;
    let j = 0;
    let noSwap = true;

    function swap(arr, ind1, ind2) {
        let temp = arr[ind1];
        arr[ind1] = arr[ind2];
        arr[ind2] = temp;
    }

    function sortRecursion(arr) {
        if (i > 0) {
            console.log(arr, j, i);
            if (i > j) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    noSwap = false;
                }
                j++
                return sortRecursion(arr)
            }
            if (noSwap) return arr;
            j = 0
            i--;
            noSwap = true;
            return sortRecursion(arr);
        }
        return arr
    }
    return sortRecursion(arr)
}

const sortedArr = bubbleSort(newArr)
console.log(sortedArr)

