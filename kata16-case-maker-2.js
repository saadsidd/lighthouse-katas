const makeCase = function(input, style) {
  
  const caseMaker = {
    vowels: 'aeiou',
    isVowel: function(letter) {
      for (let vowel of caseMaker.vowels) {
        if (letter === vowel) {
          return true;
        }
      }
      return false;
    },
    camel: function(str) {
      str = caseMaker.pascal(str);
      return str.charAt(0).toLowerCase() + str.slice(1);
    },
    pascal: function(str) {
      str = caseMaker.title(str);
      return str.replaceAll(' ', '');
    },
    snake: function(str) {
      return str.replaceAll(' ', '_');
    },
    kebab: function(str) {
      return str.replaceAll(' ', '-');
    },
    title: function(str) {
      str = str.split(' ');
      for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    },
    vowel: function(str) {
      let tempStr = '';
      for (let i = 0; i < str.length; i++) {
        if (caseMaker.isVowel(str[i])) {
          tempStr += str[i].toUpperCase();
        } else {
          tempStr += str[i];
        }
      }
      return tempStr;
    },
    consonant: function(str) {
      let tempStr = '';
      for (let i = 0; i < str.length; i++) {
        if (caseMaker.isVowel(str[i])) {
          tempStr += str[i];
        } else {
          tempStr += str[i].toUpperCase();
        }
      }
      return tempStr;
    },
    upper: function(str) {
      return str.toUpperCase();
    },
    lower: function(str) {
      return str.toLowerCase();
    }
  };

  // If more than one case given in array
  if (Array.isArray(style)) {
    let tempInput = input;
    for (let item of style) {
      tempInput = caseMaker[item](tempInput);
    }
    return tempInput;
  // Otherwise run only one case method
  } else {
    return caseMaker[style](input);
  }

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));