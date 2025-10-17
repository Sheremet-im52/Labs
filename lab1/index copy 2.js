'use strict';
const incObject = (obj) => {
  if (typeof obj  === 'object') {
    obj.n++; 
  }
};
const myObj = { n: 5 };
incObject(myObj);
console.dir(myObj); 


