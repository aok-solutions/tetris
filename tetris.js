let fs = require('fs');
fs.readFile('input.txt', (error, data) => {
  if (error) return console.log(error);
  let input =
    data
      .toString()
      .split('\n')
      .map(line => line.trim());

  console.log(input);
});
