// =============================
// ===== SORTING EXERCISES =====
// =============================


// bubbleSort

console.log('======= BUBBLESORT ========');

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([4, 20, 12, 10, 7, 9]));
console.log(bubbleSort([0, -10, 7, 4]));
console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([]));

console.log(bubbleSort([
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
    23, 2, 453, 546, 75, 67, 4342, 32
]));

console.log('========== MERGE ===========');

// Merge


function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;   
    }
    else {
        results.push(arr2[j]);
        j++;
        
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]) 
        j++;
    }
    return results;
}

console.log(merge( [1,3,4,5], [2,4,6,8] ));
console.log(merge([-2,-1,0,4,5,6], [-3,-2,-1,2,3,5,7,8] ));
console.log(merge( [3,4,5], [1,2] ));

console.log('======= MERGESORT ========');

function mergeSort(arr) {

    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort( [4, 20, 12, 10, 7, 9] ));
console.log(mergeSort( [0, -10, 7, 4] ));
console.log(mergeSort( [1, 2, 3] ));
console.log(mergeSort( [] ));

console.log(mergeSort( [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
]));

console.log('======= INSERTIONSORT ========');

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        
        let current = arr[i];
        let j = i - 1;

        while (j > -1 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};

console.log(insertionSort( [4, 20, 12, 10, 7, 9] ));
console.log(insertionSort( [0, -10, 7, 4] ));
console.log(insertionSort( [1, 2, 3] ));
console.log(insertionSort( [] ));

console.log(insertionSort( [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
]));

console.log('======= SELECTIONSORT ========');

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
            if (min !== i) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
    }
    return arr;
}


console.log(selectionSort( [4, 20, 12, 10, 7, 9] ));
console.log(selectionSort( [0, -10, 7, 4] ));
console.log(selectionSort( [1, 2, 3] ));
console.log(selectionSort( [] ));

console.log(selectionSort( [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
]));

console.log('======= PIVOT ========');

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]; // Swap elements
        }
    }
    // Swap the pivot element with the element at the swap index
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    return swapIndex; // Return the final pivot index
}

console.log(pivot( [4, 2, 5, 3, 6] ));

console.log(pivot( [5, 4, 9, 10, 2, 20, 8, 7, 3] ));
console.log(pivot( [8, 4, 2, 5, 0, 10, 11, 12, 13, 16] ));

console.log('======= QUICKSORT ========');

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);

        // Recursively sort the left side of pivot
        quickSort(arr, left, pivotIdx - 1);
        // Recursively sort the right side of pivot
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
};

console.log(quickSort( [4, 20, 12, 10, 7, 9] ));
console.log(quickSort( [0, -10, 7, 4] ));
console.log(quickSort( [1, 2, 3] ));
console.log(quickSort( [] ));

console.log(quickSort( [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23,
    2, 453, 546, 75, 67, 4342, 32
]));

console.log('======= RADIXSORT ========');

// Helper functions (Count Digit, Get Digit & Most Digits)

function countDigit(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

function getDigit(num, i) {

    return Math.floor(num / Math.pow(10, i)) % 10;
};

function mostDigits(arr) {

    let max = -Infinity;

    for (let el of arr) {
        max = Math.max(max, countDigit(el))
    }
    return max;
};

function radixSort(nums) {

    let maxDigitCount = mostDigits(nums);

    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, ()=> []);

        for (let j=0; j < nums.length; j++ ) {
            let digit = getDigit(nums[j], i);

            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);        
    }
    return nums;
};


console.log(radixSort( [8, 6, 1, 12] ));
console.log(radixSort( [10, 100, 1, 1000, 10000000] ));
console.log(radixSort( [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593] ));