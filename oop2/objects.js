/* eslint-disable no-unused-vars */
/* eslint-disable no-new-wrappers */
// Objeto literal

const obj = {
  name: 'Pepe',
  age: 22,
};

const property = 'age';
console.log(obj[property]);

// eslint-disable-next-line guard-for-in
for (const key in obj) {
  const value = obj[key];
  console.log(`La clave ${key} vale ${value}`);
}

Object.entries(obj);
Object.values(obj);
Object.keys(obj);
// Object.fromEntries();

const student = {
  course: 'OOP',
};

const st1 = Object.create(student);
// Bad st1.__proto__ = student;

st1.name = 'Ernestina';
console.log(st1.course);

// Inside COnstructor
// x = Object.create(Foo.prototype);
// x.constructor = Foo;

const st = new String('Pepe');
console.log(typeof st);

// Casting

const st11 = 'Pepe';
console.log(typeof st11);

st11.indexOf();

// Coertion

String(22);
Number('22');
Boolean(22);
