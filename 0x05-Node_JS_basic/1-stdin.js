const readline = require('readline');

const reads = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');
reads.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});
reads.on('close', () => {
  console.log('This important software is now closing');
});
