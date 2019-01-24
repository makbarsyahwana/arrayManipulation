var array = [5408, 6604, 32158, 84984, 8774, 34871]

array.sort((a, b) => a - b)

//function to return 2n smallest number
const secondSmallest = (array) => {

 const sortedNumbers = array.sort((a, b) => a - b)

 //return 2n smallest number start from index 0
 return sortedNumbers[2]

}

console.log(secondSmallest(array))