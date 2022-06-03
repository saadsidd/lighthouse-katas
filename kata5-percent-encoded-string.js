const urlEncode = function(text) {
  let txt = text.trim();
  let newText = '';
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === ' ') {
      newText += '%20';
    } else {
      newText += txt[i];
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));