//intro to scope

const city = 'New York City';
{
  
}

const logCitySkyline = () =>{
let skyscraper = 'Empire State Building';
return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());
 
// Block Scope is a variable that is only accessible within the block of code it is defined in.
// Global Scope is a variable that is accessible anywhere in the program.