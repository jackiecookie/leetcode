Array.prototype.mySort = function (sortFn) {

    let partition = function (arr, low, height) {
        //pick last as piovt
        let pivot = arr[height];

        let i = 0;
        let j = 0;
        for (; j <=height - 1; j++) {
            if (arr[j] < pivot) {
                let item = arr[j];
                arr[j] = arr[i];
                arr[i] = item;
                i++;
            }
        }
        arr[height] = arr[i];
        arr[i] = pivot;
        return i;
    }

    // quickSort
    let quickSort = function (arr, low, height) {
        if (low < height) {
            let pi = partition(arr, low, height);

            quickSort(arr, pi + 1, height)
            quickSort(arr, low, pi - 1)
        }
    }

    quickSort(this, 0, this.length-1)
}

let arr = [10, 80, 30, 90, 40, 50, 70];

arr.mySort()
 console.log(arr)