// #JavaScript
// toRoman(2017)
// => "MMXVII"
// toRoman(1999)
// => "MCMXCIX"
//I want to take a number turn it into a roman numeral 
//iterate over the oject of roman numerals
//If my number is greater than one of the keys
//then add the key (Character) to the result 
//And subtract the value from the number

//difference between while and if is that while is used for repeating a block of code multiple times as long as a condition is true, whereas if is used for executing a block of code only once if a condition is true.
const toRoman = ((number) => {
  let result = ""
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  for (const key in romanNumerals) {
    console.log(key)
    //While is used to repeatedly execute a block of code as long as the expression is true
   while (number >= romanNumerals[key]) {
      result += key
      number -= romanNumerals[key]
    }
  }
  return result
}
)

console.log(toRoman(128))


module.exports = toRoman