//const newArr = [34, 21, 54,14,65,23];
const newArr = [8, 1, 2, 3, 4, 5];

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
            if (i > j) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    j++;
                    noSwap = false;
                    return sortRecursion(arr);
                }
                j++
                return sortRecursion(arr)
            }
            if (i === j) {
                if (noSwap) return arr;
                j = 0
                i--;
                noSwap = true;
            }
            j++;
            return sortRecursion(arr);
        }
        return arr
    }
    return sortRecursion(arr)
}

bubbleSort(newArr)
console.log(newArr)

