"use strict";

const array = () => {
    const data = [];

    const arr = (index) => {
        return data[index];
    };

    arr.push = (value) => {
        data.push(value);
    };

    arr.pop = () => {
        if (data.length === 0) return undefined;
        return data.pop();
    };

    return arr;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first
console.log(arr.pop()); // undefined
