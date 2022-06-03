const multiplicationTable = function(maxValue) {

  // Table as a string
  let table = '';
  for (let i = 0; i < maxValue; i++) {
     for (let j = 0; j < maxValue; j++) {
       table += `${(i + 1) * (j + 1)} `;
     }
     table += '\n';
  }
  return table;

  // Table as a 2D array
  /*
  let table = [];
  for (let i = 0; i < maxValue; i++) {
    table.push([]);
     for (let j = 0; j < maxValue; j++) {
       table[i].push((i+1) * (j+1));
     }
  }
  return table;
  */
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(6));