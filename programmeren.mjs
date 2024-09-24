import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = await userInput.question('Wat is je naam? ');

let age = await userInput.question('Wat is je leeftijd? ');

let favoritespel = await userInput.question('Wat is je favotitespel? ');
console.log('Hallo '+ jeNaam +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoritespel +' is.');
process.exit();