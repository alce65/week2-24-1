/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */

// Objetos

const user = {
  name: "Pepe",
  age: 33,
  address: {
    city: "Cadiz",
    country: "España",
  },
};

user.name = "Jose";
user.x = 12;
user.greeting = () => {
  return "Hola";
};

console.log(user);
console.log(user.greeting());

// Funciones como objetos

const foo = () => {
  const innerFoo = () => {
    console.log("Soy inner foo");
  };

  console.log("Soy foo");
  innerFoo();
};

foo.age = "10 mim";
console.log(foo);
foo();

foo.innerFoo();

// ''.length
// ''.substring()

// HOF
// - reciben una función
// - devuelven una función

const makeCalc = (a, b, callback) => {
  callback(a, b);
};

makeCalc(20, 10, (x, y) => x + y);
makeCalc(20, 10, (x, y) => x - y);

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

makeCalc(20, 10, add);
makeCalc(24, 16, add);
makeCalc(20, 10, subtract);
