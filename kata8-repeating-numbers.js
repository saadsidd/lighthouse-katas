const repeatNumbers = function(data) {
  let output = [];
  
  for (let array of data) {
    let temp = '';
    for (let i = 0; i < array[1]; i++) {
      temp += array[0];
    }
    output.push(temp);
  }

  return output.join(', ');
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));