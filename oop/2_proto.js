/* eslint-disable no-unused-expressions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-proto */
/* eslint-disable no-unused-vars */
const human = {
  teeth: 32,
  greeting() {
    console.log('Hola soy humano');
  },
};

const student = {
  course: 'Angular',
};

const pepita = {
  age: 22,
};

student.__proto__ = human;
pepita.__proto__ = student;

console.log(human.teeth);
console.log(pepita.age);
console.log(pepita.teeth);
console.log(human.age);

console.log(pepita);
pepita.greeting();
console.log(pepita.hasOwnProperty('teeth'));
console.log(pepita.hasOwnProperty('age'));

pepita.teeth = 30;
console.log(pepita.teeth);
console.log(pepita.hasOwnProperty('teeth'));

console.log(pepita.__proto__.teeth);

const obj1 = {};
obj1.__proto__.taste = 'patata';

const obj2 = {};
console.log(obj2.taste);
console.log(obj1.__proto__.__proto__);
delete obj1.__proto__;
