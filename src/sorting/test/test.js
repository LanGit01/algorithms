var testSorting = require("./testSorting"),
    insertionSort = require("../insertionSort"),
    selectionSort = require("../selectionSort");

testSorting(insertionSort, "Insertion Sort");
testSorting(selectionSort, "Selection Sort");