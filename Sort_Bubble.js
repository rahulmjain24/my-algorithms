const newArr = [34, 21, 54,14,65,23];

function bubbleSort(arr) {
    let i = arr.length-1;
    let j = 0;

    function swap(arr, ind1, ind2) {
        let temp = arr[ind1];
        arr[ind1] = arr[ind2];
        arr[ind2] = temp;
    }

    function sortRecursion(arr) {
        if (i > 0) {
            
            if(i===j-1){
                j = 0
                i--;  
            }
            if(i>j){
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    j++;
                    return sortRecursion(arr);
                }
                j++
                return sortRecursion(arr)
            }            
            j++;
            return sortRecursion(arr);
        }
        return arr;
    }
    return sortRecursion(arr)
}

const sortedarr = bubbleSort(newArr)
console.log(sortedarr)