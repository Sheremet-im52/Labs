"use strict";

const removeElement = (array, item) => {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(arr1, 5);
console.log(arr1);
