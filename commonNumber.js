var firstArray = [68168, 87954, 32158, 8774];
var secondArray = [5408, 6604, 32158, 84984, 8774, 34871];


// function to find common number
const commonNumber = (array1, array2) => {
  return array1.filter(number => array2.indexOf(number) !== -1)
}

console.log(commonNumber(firstArray, secondArray));