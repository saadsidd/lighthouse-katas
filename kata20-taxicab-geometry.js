const blocksAway = function(directions) {

  let compass, x = 0, y = 0;
  // Orient compass based on first turn
  if (directions[0] === 'left') {
    compass = ['e', 's', 'w', 'n'];
  } else {
    compass = ['n', 'e', 's', 'w'];
  }

  let length = directions.length;
  
  for (let i = 0; i < length; i += 2) {

    if (directions[0] === 'right') {
      compass.push(compass.shift());  // Compass rotate right
    } else {
      compass.unshift(compass.pop()); // Compass rotate left
    }

    if (compass[0] === 'n') {
      y += directions[1];
    } else if (compass[0] === 'e') {
      x += directions[1];
    } else if (compass[0] === 's') {
      y -= directions[1];
    } else {
      x -= directions[1];
    }

    directions.shift();
    directions.shift();
  }

  return { east: x, north: y};
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));