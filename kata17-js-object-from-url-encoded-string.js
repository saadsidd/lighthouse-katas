const urlDecode = function(text) {
  let obj = {};

  let decode1 = text.split('&');
  let decode2 = [];
  for (let item of decode1) {
    decode2 = item.split('=');
    obj[decode2[0]] = decode2[1].replaceAll('%20', ' ');
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);