const divide = (a, b) => {
  if (b === 0) throw new Error('No es posible dividir por 0');
  return a / b;
};

try {
  console.log(divide(36, 6) * 2); // 6
  console.log(divide(37, 6) * 2); // 6....
  console.log(divide(37, 0) * 2);
  console.log(divide(0, 3) * 2);
} catch (error) {
  console.log(error.message);
}

console.log('Fin');
