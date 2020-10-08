function linearSearch(arr, val) {
    let myAns = -1;
    arr.forEach((element, index) => {
        if (element === val) {

            myAns = index;
        }
    });
    return myAns;
};


function linearSearchRecursive(arr, val, i = 0) {
    if (arr.length === 0) return -1;
    if (arr.shift() === val) return i;

    return linearSearchRecursive(arr, val, i + 1);
}

function binarySearch(arr, val) {
    var sorted = bubbleSort(arr);
    var upperBound = sorted.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (sorted[mid] < val) {
            lowerBound = mid + 1;
        }
        else if (sorted[mid] > val) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

function binarySearchRecursive(arr, val) {
    var sorted = bubbleSort(arr);
    let mid = Math.floor(sorted.length / 2);

    if (sorted.length === 1 && sorted[0] != val) {
        return -1;
    }
    if (val === sorted[mid]) {
        return mid;
    } else if (val < sorted[mid]) {
        return binarySearchRecursive(arr.slice(0, mid), val);
    } else if (val > sorted[mid]) {
        return binarySearchRecursive(arr.slice(mid), val);
    }
    return mid;
}



function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}