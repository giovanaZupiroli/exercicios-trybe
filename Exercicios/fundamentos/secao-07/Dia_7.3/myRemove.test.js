const { expect } = require('expect');
const myRemove = require('./myRemove.js');

describe('testa a função myRemove', () => {
  it('se myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it ('se myRemove não retorna o array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('se myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})