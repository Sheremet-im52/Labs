"use strict";

const composition = (...fns) => {
    const errors = [];

    for (const fn of fns) {
        if (typeof fn !== "function") {
            throw new TypeError(`${fn} is not a function`);
        }
    }

    const chain = (x) => {
        let res = x;
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                res = fns[i](res);
            }
            return res;
        } catch (e) {
            
            errors.forEach(handler => handler(e));
            return undefined;
        }
    };

    chain.on = (event, handler) => {
        if (event === "error") errors.push(handler);
    };

    return chain;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const errorFn = x => { throw new Error("Study error"); };

const f = composition(errorFn, inc, twice, cube);

f.on('error', e => {
    console.log("Error catched:", e.name);
    console.log("Text:", e.message);
});

console.log(f(5));
