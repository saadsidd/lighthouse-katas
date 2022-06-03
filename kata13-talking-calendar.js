const talkingCalendar = function(date) {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  date = date.split('/').map(Number);
  let day = '';
  if (date[2] === 1) {
    day += '1st';
  } else if (date[2] === 2) {
    day += '2nd';
  } else if (date[2] === 3) {
    day += '3rd';
  } else {
    day += date[2] + 'th';
  }
  return `${month[date[1]-1]} ${day}, ${date[0]}`;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));