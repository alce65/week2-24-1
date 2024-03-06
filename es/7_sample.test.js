import { foo } from './7_sample';

// Casos
// 2 , 4 -> 6
// 4, -5 -> -1
// 4.5 , 2 -> 6.5
// -> 0
// 5 -> 5
// 2, 4, 6 -> 6
// 'hola', 4 -> "Operación no valida"

test('when parameters should be 2 and 4, function foo return 6', () => {
  // Arrange
  const x = 2;
  const y = 4;
  const expected = 6;
  // Act
  const r = foo(x, y);
  // Assert
  expect(r).toBe(expected);
});

test('when parameters should be 4 and -5, function foo return -1', () => {
  // Arrange
  const x = 4;
  const y = -5;
  const expected = -1;
  // Act
  const r = foo(x, y);
  // Assert
  expect(r).toBe(expected);
});

test('when parameters should be 4.5 and 2, function foo return 6.5', () => {
  // Arrange
  const x = 4.5;
  const y = 2;
  const expected = 6.5;
  // Act
  const r = foo(x, y);
  // Assert
  expect(r).toBe(expected);
});

test('when there are NOT parameters, function foo return 0', () => {
  // Arrange

  const expected = 0;
  // Act
  const r = foo();
  // Assert
  expect(r).toBe(expected);
});

test('when the ONLY parameter are 5, function foo return 5', () => {
  // Arrange

  const x = 5;
  const expected = 5;
  // Act
  const r = foo(x);
  // Assert
  expect(r).toBe(expected);
});

test('when parameters should be 4, 2 and 7, function foo return 6', () => {
  // Arrange
  const x = 4;
  const y = 2;
  const z = 7;
  const expected = 6;
  // Act
  const r = foo(x, y, z);
  // Assert
  expect(r).toBe(expected);
});

test('when parameters should be "Hola" and 4, function foo return "Error..."', () => {
  // Arrange
  const x = 'Hola';
  const y = 4;
  const expected = 'Error...';
  // Act
  const r = foo(x, y);
  // Assert
  expect(r).toBe(expected);
});
