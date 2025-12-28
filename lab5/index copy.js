"use strict";

function seq(fn) {
    const funcs = [];

    function chain(x) {
        if (typeof x === "function") {
            funcs.push(x);
            return chain;
        }

        if (typeof x === "number") {
            let result = x;
            for (let i = funcs.length - 1; i >= 0; i--) {
                result = funcs[i](result);
            }
            return result;
        }
    }

    if (typeof fn === "function") {
        funcs.push(fn);
        return chain;
    }
}
