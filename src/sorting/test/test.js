var testSorting = require("./testSorting"),
    insertionSort = require("../insertionSort"),
    selectionSort = require("../selectionSort"),
    mergeSort = require("../mergeSort");

testSorting(insertionSort, "Insertion Sort");
testSorting(selectionSort, "Selection Sort");
testSorting(mergeSort, "Merge Sort");