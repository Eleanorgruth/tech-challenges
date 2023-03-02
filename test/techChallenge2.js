const { expect } = require('chai');
const findNextPalindrome = require("../techChallenge2"); 

describe('findNextPalindrome', (input) => {
  it('should return the correct output', () => {
    input = 100
    const result = findNextPalindrome(input);
    expect(result).to.equal(101);
  });
  it('should return the correct output', () => {
    input = 101
    const result = findNextPalindrome(input);
    expect(result).to.equal(111);
  });
  it('should return the correct output', () => {
    input = 111
    const result = findNextPalindrome(input);
    expect(result).to.equal(121);
  });
  it('should return the correct output', () => {
    input = 90
    const result = findNextPalindrome(input);
    expect(result).to.equal(99);
  });
});