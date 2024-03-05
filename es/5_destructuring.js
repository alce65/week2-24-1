/* eslint-disable no-unused-vars */
const createArray = () => [11, 27];
const createObject = () => ({
  name: "Pepe",
  age: 22,
});

const [a] = createArray();
const { name } = createObject();

// Raro
// let age;
// ({ age } = createObject());
// age = 23

console.log(a);
console.log(name);

const useData = ([a, b]) => {
  console.log(a);
  console.log(b);
};

const useObject = ({ name, age }) => {
  console.log(name);
  console.log(age);
};

useData([1, 2]);
useObject({ name: "Pepe", age: "22" });

// Clonado

const obj = { name: "Pepe", age: 22 };
const objString = JSON.stringify(obj);

console.log(obj, typeof obj);
console.log(objString, typeof objString);

const x = JSON.parse(objString);
console.log(x, typeof x);

const aData = [1, 2, 3, [1, 2]];
const aData2 = [...aData];
const aData3 = aData.map((item) => item);
const aData4 = JSON.parse(JSON.stringify(aData));

const obj1 = { name: "Pepe", age: 33 };
const obj2 = { ...obj2 };
const obj3 = JSON.parse(JSON.stringify(obj1));

structuredClone();
