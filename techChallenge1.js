//Millions of Numbers
// nums1 = [1, 2, 4, 5, 8]
// nums2 = [2, 3, 5, 7, 9]
// nums3 = [1, 2, 5, 8, 9]
// findMatches(nums1, nums2, nums3)
// => [2, 5]

const findMatches = ((array1, array2, array3)=> {
  const obj = {}
  const arrayOfThree = []
  const newArray = [...array1, ...array2, ...array3]
  newArray.forEach((number)=> {
    if(!obj[number]) {
      obj[number] = 1
    } else {
      obj[number] +=1
    }
  })
  for (const property in obj) {
    if(obj[property] === 3){
      arrayOfThree.push(Number(property))
    }
  }
  return arrayOfThree
})
const nums1 = [1, 2, 4, 5, 8]
const nums2 = [2, 3, 5, 7, 9]
const nums3 = [1, 2, 5, 8, 9]


console.log(findMatches(nums1, nums2, nums3))