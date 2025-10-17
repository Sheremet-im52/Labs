'use strict';


const countTypesInArray = (arr) => {
  const counters = {}; 

  for (let item of arr) { 
    let type = typeof item; 
    if (counters[type]) {
      counters[type] = counters[type] + 1; 
    } else {
      counters[type] = 1; 
    }
  }

  return counters; 
};

const arr = [true, 'hi', 5, 12, -200, false, 'bye', null, undefined, { a: 1 }];
console.log(countTypesInArray(arr));


