/*
Code prints a character pyramid to the console. The number of rows is driven by the constant count. It may be an inverted pyramid as well, that can be controlled by the inverted variable.

This primarily teaches a few things:
-> Basic for loop in JS
-> for a of objects loop - to iterate over a list/array
-> the push, unshift, shift, pop methods of an array
-> Calling a function from a loop

This is the first exercise from freeCodeCamp.org Javascript training
*/

const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
