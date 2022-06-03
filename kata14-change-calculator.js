const calculateChange = function(total, cash) {
  const value = [
    ['twentyDollars', 2000], 
    ['tenDollars', 1000], 
    ['fiveDollars', 500], 
    ['twoDollars', 200],
    ['oneDollar', 100],
    ['quarter', 25],
    ['dime', 10],
    ['nickel', 5],
    ['penny', 1]
  ];
  let change = cash - total;
  let obj = {};
  for (let i = 0; i < value.length; i++) {
    let denomination = 0;
    while ((change - value[i][1]) >= 0) {
      change -= value[i][1];
      denomination++;
      obj[value[i][0]] = denomination;
    }
  }
  console.log(obj);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 400045));
console.log(calculateChange(501, 1000));