const calculator = require('../functions/calculator');

test('take two numbers and return the correct calculation', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

test('take two numbers and return the correct calculation', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

test('take two numbers and return the correct calculation', () => {
    expect(calculator.divide(1, 2)).toBe(.5);
  });

test('take two numbers and return the correct calculation', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });