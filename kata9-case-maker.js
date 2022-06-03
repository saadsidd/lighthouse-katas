const camelCase = function(input) {
  input = input.split(' ');
  let output = input.shift();
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (j === 0) {
        output += input[i][j].toUpperCase();
      } else {
        output += input[i][j];
      }
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));