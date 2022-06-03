const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return (4/3)*PI*radius*radius*radius;
}
const coneVolume = function (radius, height) {
  return (1/3)*PI*radius*radius*height;
}
const prismVolume = function (height, width, depth) {
  return width*depth*height;
}

const totalVolume = function (solids) {
  let total = 0;
  
  for (let shape of solids) {
    if (shape.type === 'sphere') {
      total += sphereVolume(shape.radius);
    } else if (shape.type === 'cone') {
      total += coneVolume(shape.radius, shape.height);
    } else {
      total += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);