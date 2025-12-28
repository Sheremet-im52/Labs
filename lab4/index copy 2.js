"use strict";

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

function ages(obj) {
    const result = {};

    for (const key in obj) {
        result[key] = obj[key].died - obj[key].born;
    }

    return result;
}

console.log(ages(persons));
