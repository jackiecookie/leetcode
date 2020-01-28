Array.prototype.mySlice = function(begin,end){
    if(!end){
        end = this.length;
    }

    let newArr = [];

    for (let i = begin; i < end; i++) {
        newArr.push(this[i]);
    }

    return newArr;
}


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]