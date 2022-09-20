const myFizzBuzz = require('./myFizz.js');

describe('exercício 3', () => {
  it('testa se o número é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('testa se o número é fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('testa se o número é buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('testa se o número não é divisível', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('testa se é número', () => {
    expect(myFizzBuzz('1')).toBe(false);
  });
})