// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



let som;
let getal1 ;
let getal2 ;

getal1 = parseFloat(await userInput.question("voer een getal in: "));
getal2 = parseFloat(await userInput.question("voer een getal in: ")); 

som = getal1 + getal2;
console.log(som);



process.exit();