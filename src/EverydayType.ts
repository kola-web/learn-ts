console.log("#################################EverydayType.ts#################################");

interface Point {
  x: 1,
  y: 2
}

function printPoint(p: Point) {
  console.log(p.x, p.y);
}

printPoint({ x: 1, y: 2 })
