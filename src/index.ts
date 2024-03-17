function getSurfaceAreaOfSquare(side: number) {
  return side * side;
}

function getSurfaceAreaOfRectangle(length: number, width: number) {
  return length * width;
}

function getSurfaceAreaOfTriangle(base: number, height: number) {
  return (base * height) / 2;
}

function getSurfaceAreaOfCircle(radius: number) {
  return Math.PI * radius * radius;
}

console.log(getSurfaceAreaOfSquare(5));
console.log(getSurfaceAreaOfCircle(5));
