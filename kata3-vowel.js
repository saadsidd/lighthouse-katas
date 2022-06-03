const numberOfVowels = function(data) {
  let total = 0;
  const vowels = 'aeiou';

  for (let letter of data) {
    for (let vowel of vowels) {
      if (letter === vowel) {
        total++;
      }
    }
  }
  
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));