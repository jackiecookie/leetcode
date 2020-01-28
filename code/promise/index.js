const [PENDING, FULFILLD, REJECTED] = [0, 1, 2];

function isFunction(fn) {
    return typeof fn === "function"

}

function myPromise(executor) {

    if (!isFunction(executor)) {
        return
    }

    this.resolveCallback = [];
    this.rejectedCallBack = [];

    this.state = PENDING;
    let self = this;


    this._applyCallback = function (callbacks, arg) {
        while (callbacks.length) {
            let [callback, promise] = callbacks.shift();
            debugger
            try {
                let result = callback(arg);
                if (result instanceof myPromise) {
                    result.then(function (v) {
                        promise.resolve(v);
                    })
                } else {
                    promise.resolve(result);
                }
            }
            catch (e) {
                promise.rejected(e);
            }

        }
    }

    let resolve = function (val) {
        if (self.state !== PENDING) {
            return
        }
        self.state = FULFILLD;
        self.val = val;
        self._applyCallback(self.resolveCallback, val);
    }

    this.resolve = resolve;

    let rejected = function (reason) {
        if (self.state !== PENDING) {
            return
        }
        self.state = REJECTED;
        self.reason = reason;
    }

    this.rejected = rejected;

    try {
        executor(resolve, rejected)
    }
    catch (e) {
        rejected(e);
    }

}

myPromise.prototype.then = function (resolve) {
    if (!isFunction(resolve)) {
        return
    }

    let newPromise = new myPromise(function () { });

    this.resolveCallback.push([resolve, newPromise]);
    if (this.state === FULFILLD) {
        this._applyCallback(this.resolveCallback, this.val);
    }

    return newPromise
}


let p = new myPromise(function (r) {
    r(1);
}).then(function (v) {
    console.log(v);
    return 2;
}).then(function (v) {
    console.log(v);
    return new myPromise(function (r) {
        r(3);
    })
})

// let p1 = new Promise(function(r){
//     r(1);
// }).then(function(v){
//     console.log(v);
//     return 2
// }).then(function(v){
//     console.log(v);
//     return new Promise(function(r){
//         r(3);
//     })
// })

// console.log(p1)



