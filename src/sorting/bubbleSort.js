/**
 * 
 * @param {*} arr 
 */
function bubbleSort(arr){
    var i, j, temp;

    for(i = 0; i < arr.length - 1; i++){
        for(j = arr.length; j > i; j--){
            if(arr[j - 1] > arr[j]){
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


module.exports = bubbleSort;