var tape = require("tape");

var values = {
    "sorted": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    "nearly sorted": [0, 1, 2, 3, 4, 6, 5, 7, 8, 9],
    "reverse sorted": [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    "empty": [],
    "single element": [1],
    "identical elements": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    "multiple identical elements": [5, 5, 5, 1, 1, 6, 6, 6, 6, 9, 0, 6, 1, 5]
};


function isSorted(arr){
    for(var i = 1; i < arr.length; i++){
        if(arr[i - 1] > arr[i]){
            return false;
        }
    }

    return true;
}


/**
 * Runs the sorting algorithm against a series of tests
 * 
 * @param {function} sort - the sort function to test
 * @param {string} title - title of the test
 */
function testSortingAlgorithm(sort, title){
    if(typeof title === "undefined"){
        title = "Sorting Algorithm Test"
    }

    tape(title, function(t){
        for(var key in values){
            t.ok(isSorted(sort(values[key])), key);
        }

        t.end();
    });
}


module.exports = testSortingAlgorithm;