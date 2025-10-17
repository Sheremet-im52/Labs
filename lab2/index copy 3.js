'use strict'
const fn = () => {
    const obj1 = { name: 'Marcus' }; 
    let obj2 = { name: 'Marcus' };   

    obj1.name = 'Aurelius';         
    obj2.name = 'Aurelius';          
    obj2 = { name: 'Marcus Aurelius' };  
    return { obj1, obj2 };
};


function createUser(name, city) {
    return { name, city };
}


const phoneBookArray = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "Вася Огурец", phone: "+380661234567" },
    { name: "Лиза сасиска", phone: "+380501112233" }
];

function findPhoneByName(name) {
    for (let i = 0; i < phoneBookArray.length; i++) {
        if (phoneBookArray[i].name === name) {
            return phoneBookArray[i].phone;
        }
    }
    return "Контакт не найден";
}


const phoneBookHash = {
    "Marcus Aurelius": "+380445554433",
    "Вася Огурец": "+380661234567",
    "Лиза сасиска": "+380501112233"
};

function findPhoneByNameHash(name) {
    return phoneBookHash[name] || "Контакт не найден";
}


console.log(fn());                         
console.log(createUser("Marcus Aurelius", "Roma")); 
console.log(findPhoneByName("Вася Огурец"));      
console.log(findPhoneByName("Unknown"));           
console.log(findPhoneByNameHash("Лиза сасиска")); 
console.log(findPhoneByNameHash("Unknown"));       
