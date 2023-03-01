// import chai from "chai"
// const expect = chai.expect
const { expect } = require('chai');
const findNextPalindrome = require("../techChallenge2"); 

describe('findNextPalindrome', (input) => {
  it('should return the correct output', () => {
    const result = findNextPalindrome(input);
    expect(result).to.equal(input);
  });
});