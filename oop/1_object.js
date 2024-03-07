/* eslint-disable no-unused-vars */

// OOP
// Clases -> instancian objetos

const obj = {
  user: 'Pepe',
  age: 22,
  greeting() {
    console.log('Hola');
  },
};

obj.greeting();

const obj1 = { ...obj };

// Deep Clone
const obj2 = JSON.parse(JSON.stringify(obj));
// Duda const obj3 = structuredClone(obj);

// console.log(x); // ReferenceError
console.log(obj.x); // Say undefined
console.log(obj);
console.log(obj.x?.x); // TypeError

const captain = 'Jim';
const ship = { captain };
