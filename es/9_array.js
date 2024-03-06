// Los arrays no existen en JS

// Array o matriz = lista ordenada y limitada de elementos

const arr = [7];
console.log(typeof arr);
arr.age = 22;
console.log(arr);
console.log(arr.length);
arr.forEach((item, i) => console.log(`Index ${i}`, item));

// Arrays "normales"
{
  const arr = [10, 20, 30, 40];
  console.log(arr.length);
  arr.push(34);
  arr[arr.length] = 65;
  arr[25] = 44;
  console.log(arr);
  console.log(arr.length);

  console.log(arr[16]);
  console.log(arr[160]);
}

{
  const arr = new Array(10);
  console.log(arr);
  arr.forEach((item, i) => console.log(i));
}

{
  const arr = [2, 4, 7, 3, 8];
  console.log(arr.length);
  arr.length = 3;
  console.log(arr.length);
}

// Mutable
{
  const arr = [1];
  const newLength = arr.push(4);
  console.log(newLength);
}

// Inmutable
{
  const arr = [3, 4];
  const newArr = arr.concat([2, 6]);
  console.log(arr);
  console.log(newArr);
}

{
  const arr = [undefined, undefined];
  console.log(arr.length);
}
