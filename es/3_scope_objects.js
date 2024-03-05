/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

let g = {
  value: 22,
};

const horror = (p = 0) => {
  let l = 6;
  l *= p;
  g.value += 2;
  return l + g.value;
};

const foo = (p = 0, { ...g }) => {
  // Alt g = { ...g };
  // No sirve const g1 = g;
  // Mala práctica p = 2;
  let l = 6;
  l *= p;
  g.value = 10;
  return l + g.value;
};

console.log(horror(3));
console.log(g); // Now g.value = 24
const z = 3;
console.log(foo(3, g));
console.log(g); // Now g.value = 24
