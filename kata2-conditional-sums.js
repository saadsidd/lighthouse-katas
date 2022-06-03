const conditionalSum = function(values, condition) {
  if (values.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let num of values) {
    if (condition === 'even' && num % 2 === 0) {
      sum += num;
    } else if (condition === 'odd' && num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));