const { expect } = require('chai');
const toRoman = require("../techChallenge3") 

describe('toRoman', (input) => {
  it('should return C if given 100', () => {
    input = 100
    const result = toRoman(input);
    expect(result).to.equal("C");
  });
  it('should return CXXVIII if given 128', () => {
    input = 128
    const result = toRoman(input);
    expect(result).to.equal("CXXVIII");
  });
  it('should return MMXVII if given 2017', () => {
    input = 2017
    const result = toRoman(input);
    expect(result).to.equal("MMXVII");
  });
  it('should return MCMXCIX if given 1999', () => {
    input = 1999
    const result = toRoman(input);
    expect(result).to.equal("MCMXCIX");
  });
})