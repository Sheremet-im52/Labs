"use strict";

const difference = (array1, array2) => {
    return array1.filter(item => !array2.includes(item));
};

console.log(difference([7, -2, 10, 5, 0], [0, 10])); 
console.log(difference(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad']));
