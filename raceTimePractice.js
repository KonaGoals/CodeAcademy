let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 18;

if (age && early  > 18){
 raceNumber += 1000
} 
if (age > 18 && early){
  console.log(`Racer ${raceNumber} will start at 9:30 am`)
} else if (age > 18 && !early){
  console.log(`If runner ${raceNumber} is not over 18 AND did not register early they will race at 11:00am`);
} 
if (age < 18){
  console.log('Under 18 will start at 12:30 pm regardless of registration time')
} else if (age === 18 && early){
  console.log('getcha ass to da registration for further assitance')
}

console.log(helloWorld()); // ???

const helloWorld = function () {
  return 'Hello World!';
}

helloWorld