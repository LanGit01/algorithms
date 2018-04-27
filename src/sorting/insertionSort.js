/**
 * @param {Array} arr - array to be sorted
 */
function insertionSort(arr){
    var i, j, key;

    for(i = 1; i < arr.length; i++){
        key = arr[i];
        j = i - 1;

        while(j > -1 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

module.exports = insertionSort;