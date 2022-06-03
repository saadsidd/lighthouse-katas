const sumLargestNumbers = function(data) {
  let largestNums = [];

  for (let i = 0; i < 2; i++) {
    
    let largest = 0, index;
    for (let j = 0; j < data.length; j++) {

      if (data[j] > largest) {
        largest = data[j];
        index = j;
      }

    }
    // Store largest number found and set to 0 for 2nd loop
    largestNums.push(data[index]);
    data[index] = 0;
  }

  return largestNums[0] + largestNums[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));