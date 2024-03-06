import { arrayLength, evenOrOdd, factorial } from './8_make_test';

describe('evenOrOdd', () => {
  test('it should return "Odd [Impar]" when argument is 3', () => {
    // Arrange;
    const x = 3;
    const expected = 'Odd [Impar]';
    // Act
    const r = evenOrOdd(x);
    // Assert
    expect(r).toBe(expected);
  });

  test('it should return "Even [Par]" when argument is 2', () => {
    // Arrange;
    const x = 2;
    const expected = 'Even [Par]';
    // Act
    const r = evenOrOdd(x);
    // Assert
    expect(r).toBe(expected);
  });

  test('it should return "Numero decimal" when argument is 2.5', () => {
    // Arrange;
    const x = 2.5;
    const expected = 'Numero decimal';
    // Act
    const r = evenOrOdd(x);
    // Assert
    expect(r).toBe(expected);
  });

  test('it should return "Even [Par]" when argument is 0', () => {
    // Arrange;
    const x = 0;
    const expected = 'Even [Par]';
    // Act
    const r = evenOrOdd(x);
    // Assert
    expect(r).toBe(expected);
  });
});

// TDD

describe('factorial', () => {
  test('it should return 1 when argument is 0', () => {
    // Alt const x = 0;
    // const expected = 1;
    // const result = factorial(x);
    // expect(result).toBe(expected);
    expect(factorial(0)).toBe(1);
  });

  test('it should return 1 when argument is 1', () => {
    const x = 1;
    const expected = 1;
    const result = factorial(x);
    expect(result).toBe(expected);
  });

  test('it should return 120 when argument is 5', () => {
    const x = 5;
    const expected = 120;
    const result = factorial(x);
    expect(result).toBe(expected);
  });

  test('it should throw an error when argument is -5', () => {
    const x = -5;
    const expected = 'Numero negativo';
    // Alt try {
    //   factorial(x);
    // } catch (error) {
    //   expect(error.message).toBe(expected);
    // }

    expect(() => factorial(x)).toThrow(expected);
  });

  test('it should throw an error when argument is 5.5', () => {
    const x = 5.5;
    const expected = 'Numero decimal';
    expect(() => factorial(x)).toThrow(expected);
  });
});

describe.only('arrayLength', () => {
  test('should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
  test('should be 1 when argument is [6]', () => {
    const x = [6];
    const expected = 1;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 3 when argument is [6, 6, 6]', () => {
    const x = [6, 6, 6];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 3 when argument is [false, false, false]', () => {
    const x = [false, false, false];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 3 when argument is [undefined, undefined]', () => {
    const x = [undefined, undefined];
    const expected = 2;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});
