"use strict";

const unique = (array) => {
    const res = [];
    for (const item of array) {
        if (!res.includes(item)) res.push(item);
    }
    return res;
};

console.log(unique([2, 1, 1, 3, 2])); 
console.log(unique(['top', 'bottom', 'top', 'left'])); 
