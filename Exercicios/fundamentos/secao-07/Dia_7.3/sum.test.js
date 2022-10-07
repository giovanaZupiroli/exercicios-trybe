const { expect } = require('expect');
const sum = require('./sum');

describe('Se sum retorna a soma de a + b', () => {
  test('Se sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Se sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Se sum lança um erro com 4 e 5(String)', () => {
    expect(() => { sum(4, "5")}).toThrowError();
  })

  test('Se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrowError(('parameters must be numbers'));
  })
});

