/**
 * Kickstart Merge Sort
 * 
 * @param {*} arr - array to sort
 */
function mergeSort(arr){
    return splitMerge(arr, 0, arr.length);
}


/**
 * Mergesort recursive function. Handles the "divide" part of the divide and conquer approach.
 * 
 * It recursively splits the array into two subarrays. If the base case is reached (that is, 
 * it cannot be further subdivided), it calls the `merge` function, which handles the "conquer" part.
 * 
 * @param {*} arr
 * @param {*} start - start index of the current subarray that the function operates on
 * @param {*} end - end index + 1 of the subarray that the function operates on
 */
function splitMerge(arr, start, end){
    var middle;

    if(start < end - 1){
        middle = ~~((end + start + 1) / 2); // Truncate to an integer
        splitMerge(arr, start, middle);
        splitMerge(arr, middle, end);
        merge(arr, start, middle, end);
    }

    return arr;
}

/**
 *  Combines two sorted subarrays L (from index `start` to `middle`-1) and R (from index `middle` to `end` - 1),
 *  resulting in a sorted array of size L.length + R.length.
 * 
 * @param {*} arr 
 * @param {*} start - starting index of first sub-array
 * @param {*} middle - starting index of second sub-array
 * @param {*} end - index of last element of second sub-array + 1
 */
function merge(arr, start, middle, end){
    var l = arr.slice(start, middle),
        r = arr.slice(middle, end),
        i = j = 0, 
        arrIndex = start;

    while(i < l.length && j < r.length){
        if(l[i] < r[j]){
            arr[arrIndex++] = l[i++];
        }else{
            arr[arrIndex++] = r[j++];
        }
    }

    while(i < l.length){
        arr[arrIndex++] = l[i++];
    }

    while(j < r.length){
        arr[arrIndex++] = r[j++];
    }

    return arr;
}


module.exports = mergeSort;