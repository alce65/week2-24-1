 
let g = 22;

const horror = (p = 0) => {
  let l = 6;
  l *= p;
  g += 2;
  return l + g;
};

const foo = (p = 0, g) => {
  let l = 6;
  l *= p;
  return l + g;
};

console.log(horror(3));
console.log(foo(3, g));
