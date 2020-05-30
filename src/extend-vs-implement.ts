// https://stackoverflow.com/questions/38834625/whats-the-difference-between-extends-and-implements-in-typescript
interface IPoint {
  x: number;
  y: number;
  distance(other: IPoint): number;
}

class Point implements IPoint {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public distance(other: Point): number {
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)
    );
  }
}

class Point3D extends Point {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  distance(other: Point3D): number {
    return 1000 + other.z + super.distance(other);
  }
}

const p1 = new Point(1, 2);
const p2 = new Point(2, 2);
const p3d_1 = new Point3D(1, 1, 1);
const p3d_2 = new Point3D(5, 5, 5);

console.log("p1 - p2:", p1.distance(p2));
console.log("p1 - p3d_1", p1.distance(p3d_1)); // p3d_1 acts like Point
//p3d_1.distance(p1)); <- error because p1 is not Point3D
console.log("p3d_1 - p3d_2", p3d_1.distance(p3d_2)); // 3D distance

function myTypes(p: IPoint) {
  let types = [];

  if (p instanceof Point3D) {
    types.push("Point3D");
  }
  if (p instanceof Point) {
    types.push("Point");
  }
  console.log("My types:", types);
}

myTypes(p1); // ['Point']
myTypes(p3d_1); // ['Point3D', 'Point']
