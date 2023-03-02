// #JavaScript
// const arrayMatrix = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ];
// snail(arrayMatrix) 
// => [9, 8, 7, 4, 1, 2, 3, 6, 5]
const snail = ((arrayMatrix)=> {
const newArray = []
newArray.push(...arrayMatrix[0], arrayMatrix[1][2], arrayMatrix[2][2])
return newArray
})
console.log(snail([[9, 8, 7], [6, 5, 4], [3, 2, 1]]))
module.exports = snail
