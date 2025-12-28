"use strict";

let func = function sum() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
};
console.log(func(1, 2, 3)); 

func = function sum() {
    let s = 0;
    for (const x of arguments) {
        s += x;
    }
    return s;
};
console.log(func(0));

func = function sum() {
    let s = 0;
    let i = 0;
    while (i < arguments.length) {
        s += arguments[i];
        i++;
    }
    return s;
};
console.log(func()); 

func = function sum() {
    let s = 0;
    let i = 0;

    if (arguments.length > 0) {
        do {
            s += arguments[i];
            i++;
        } while (i < arguments.length);
    }
    return s;
};
console.log(func(1, -1, 1)); 

func = function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
};
console.log(func(10, -1, -1, -1));
