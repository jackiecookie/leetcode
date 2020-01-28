Array.prototype.mySplice = function (start, deltetCount, ...items) {
    //返回被删除元素
    let deleteArr = [];
    let insertCount = items.length;
    let adjustCount = insertCount - deltetCount;
    let len = this.length;

    if (adjustCount >= 0) {
        //insert > delete
        for (let i = len - 1; i >= start; i--) {
            // push last elment back
            this[i + adjustCount] = this[i];
        }
        for (let i = start, j = 0; j < items.length; i++ , j++) {
            if (deltetCount > 0) {
                deleteArr.push(this[i]);
            }
            this[i] = items[j]
        }
    } else {
        for (let i = start, j = 0; i < len; i++ , j++) {
            if (j < deltetCount) {
                deleteArr.push(this[i]);
            }
            if (j < insertCount) {
                this[i] = items[j];
            } else {
                if (i >= len - deltetCount) {
                    delete this[i];
                } else {
                    this[i] = this[i + 1]
                }

            }
        }
    }

    return deleteArr;
}


const months = ['Jan', 'March', 'April', 'June'];
months.mySplice(1, 3, 'May', 'May1');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.mySplice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



// The iterable protocol allows JavaScript objects to define or customize their iteration behavior,

// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite),
//  and potentially a return value when all values have been generated.