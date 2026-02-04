// __tests__/calculator.test.ts
import { add, div, mul, sub } from '../src/utils/calculator';

describe('CI/CD Calculator Metrics Tests', () => {
  test('ADD: returns correct sum', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('SUB: returns correct difference', () => {
    expect(sub(5, 3)).toBe(10);
  });

  test('MUL: returns correct product', () => {
    expect(mul(4, 3)).toBe(12);
  });

  test('DIV: returns correct quotient', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('DIV: throws error when dividing by zero', () => {
    expect(() => div(10, 0)).toThrow('Division by zero');
  });
});
