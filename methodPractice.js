//.forEach method
//forEach() method executes a provided function once for each array element.
//forEach() method does not change the original array.
//forEach() method does not return a value.
//forEach() method is not supported in Internet Explorer 8 and earlier versions.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits => console.log(`I want to eat a ${fruits} ${fruits.length} times in a row `));

//.filter() method creates a new array with all elements that pass the test implemented by the provided function.
//.filter() method does not change the original array.
//.filter() method does not return a value.
//.filter() method is not supported in Internet Explorer 8 and earlier versions.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250
})


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7
})

console.log(longFavoriteWords())

//.findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
//.findIndex() method does not change the original array.
//.findIndex() method does not return a value.
//.findIndex() method is not supported in Internet Explorer 8 and earlier versions.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animals => {
  return animals === 'elephant'
})
 const startsWithS = animals.findIndex( animals => {
   return animals[0] === 's'
 })

console.log(startsWithS)

//.map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//.map() method does not change the original array.
//.map() method does not return a value.
//.map() method is not supported in Internet Explorer 8 and earlier versions.
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animals => {
  return animals[0]
})



console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumbers => {
return bigNumbers / 100
})

//.reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//.reduce() method does not change the original array.
//.reduce() method does not return a value.
//.reduce() method is not supported in Internet Explorer 8 and earlier versions.

const newNumbers = [1, 3, 5, 7];

