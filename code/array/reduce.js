Array.prototype.myReduce = function (fn, initialValue) {
    let len = this.length;
    let idx = 0;
    let accumulator = initialValue;
    if (accumulator == undefined) {
        if (len === 0) {
            throw new Error("Reduce of empty array with no initial value")
        } else {
            accumulator = this[idx];
            idx = 1;
        }
    }
    while (idx < len) {
        accumulator = fn(accumulator, this[idx], idx, this);
        idx++;
    }
    return accumulator;
}


const array1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer, 5));
// expected output: 15