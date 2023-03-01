// #JavaScript
// findNextPalindrome(100)
// => 101

// findNextPalindrome(101)
// => 111
//I want to take number + 1
//Check if it is a paldrone, if it is return it. if not plus one again until it is

const isPalindrome = ((number) =>  {
  const stringNumber = String(number)
  const reversedStringNum = stringNumber.split("").reverse().join("")
  return stringNumber === reversedStringNum
})

const findNextPalindrome = ((number)=> {
  const newNumber = number + 1
  if (isPalindrome(newNumber)) {
    return newNumber
  }
  return findNextPalindrome(newNumber);
})

console.log(findNextPalindrome(111))
module.exports = findNextPalindrome