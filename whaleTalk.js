const input = "um skippity boop bap i love code <3 ";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(`i is ${i}`)
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }

  for (let y = 0; y < vowels.length; y++) {
    //console.log(`y is ${y}`)
    if (input[i] === vowels[y]) {
      //console.log(vowels[y])
      resultArray.push(vowels[y]);
    }
  }
}
//console.log(resultArray);

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
