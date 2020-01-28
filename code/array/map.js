Array.prototype.myMap = function(fn,thisArg){
    let len = this.length;
    let idx = 0;
    let result = [];
    while (idx<len) {
        //  解决不连续的问题
        // let a = [];
        // a[3] = 3;
        if(idx in this){
            let res = fn.call(thisArg||this,this[idx],idx,this);
            result.push(res);
        }
        idx++;
    }
    return result;
}


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.myMap(x => x * 2);

console.log(map1);