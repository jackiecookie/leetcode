Array.prototype.myforEach = function (fn, innerThis) {
    let len = this.length;
    let idx = 0;
    if (innerThis === undefined) {
        innerThis = this;
    }
    while (idx < len) {
        let res = fn.call(innerThis, this[idx], idx, this)
        if (res === false) {
            break
        }
        idx++;
    }
}


let a = [1, 2, 3, 4, 5];

let _this = {};

a.myforEach(function (v, i, arr) {
    console.log(v);
    console.log(i);
    console.assert(arr===a);
    console.assert(_this===this);
},_this)
