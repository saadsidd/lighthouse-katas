const squareCode = function(message) {

  message = message.replaceAll(' ', '');
  let sqrNum = Math.ceil(Math.sqrt(message.length));
  let arr = [];
  // Create array of equal non-secret strings
  for (let i = 0; i < sqrNum; i++) {
    arr.push(message.slice(sqrNum*i, sqrNum*(i+1)));
  }
  // Remove any empty strings from array
  arr = arr.filter(item => item);

  let output = '';
  // Create new secret message string
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
        output += arr[j][i];
      }
    }
    output += ' ';
  }
  return output.trim();
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));