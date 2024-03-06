export function evenOrOdd(p = 0) {
  // Temp if (!isNumericValid()) return 'Invalid Value'
  if (p !== Math.trunc(p)) return 'Numero decimal';
  return p % 2 ? 'Odd [Impar]' : 'Even [Par]';
}

export function factorial(p = 0) {
  if (p < 0) {
    throw new Error('Numero negativo');
  }

  if (p !== Math.trunc(p)) {
    throw new Error('Numero decimal');
  }

  let r = 1;
  for (let i = 2; i <= p; i++) {
    r *= i;
  }

  return r;
}

// Function like array.length

export const arrayLength1 = (array) => {
  let r = 0;

  while (array[r] !== undefined) {
    r++;
  }

  return r;
};

export const arrayLength = (array) => {
  let r = 0;

  // eslint-disable-next-line no-unused-vars
  for (const iterator of array) {
    r++;
  }

  return r;
};
