const { expect } = require('chai');
const snail = require("../techChallenge4") 

describe('snail', (input) => {
  it('should [9, 8, 7, 4, 1, 2, 3, 6, 5] if given [[9, 8, 7], [6, 5, 4], [3, 2, 1]]', () => {
    input =  [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
    const result = snail(input);
    expect(result).to.equal([9, 8, 7, 4, 1, 2, 3, 6, 5]);
  });
})