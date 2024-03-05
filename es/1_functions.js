 
/* eslint-disable no-unused-vars */
// Funciones

export function evenOrOdd(p = 0) {
  const r = p % 2 ? "Odd [Impar]" : "Even [Par]";
  console.log(p);
  console.log(r);
  return r;
  //  Alternativa: return (p%2) ? 'Odd [Impar]' : 'Even [Par]'
}

// Declaración

export function foo(p = 0) {
  // Código
  let l = 6;
  l = "Luis";
  return p;
}

// Asignación de expresión funcional (anónima)

const bar = function (p = 0) {};

// Asignación de expresión funcional tipo arrow function

const barArrow = (p = 0) => {};

foo();
foo(23);
foo("Pepe");
foo(34, 67);

console.log(evenOrOdd(5));

const s = bar();
console.log(typeof s);
