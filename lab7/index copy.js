"use strict";

const removeElements = (array, ...items) => {
    for (const item of items) {
        let index;
        while ((index = array.indexOf(item)) !== -1) {
            array.splice(index, 1);
        }
    }
};

const arr2 = [1, 2, 3, 4, 5, 6, 7];
removeElements(arr2, 5, 1, 6);
console.log(arr2);
