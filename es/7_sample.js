export function foo(a = 0, b = 0) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error...';
  }

  return a + b;
}
