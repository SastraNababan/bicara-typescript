"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    distance(other) {
        return 1000 + other.z + super.distance(other);
    }
}
const p1 = new Point(1, 2);
const p2 = new Point(2, 2);
const p3d_1 = new Point3D(1, 1, 1);
const p3d_2 = new Point3D(5, 5, 5);
console.log("p1 - p2:", p1.distance(p2));
console.log("p1 - p3d_1", p1.distance(p3d_1));
console.log("p3d_1 - p3d_2", p3d_1.distance(p3d_2));
function myTypes(p) {
    let types = [];
    if (p instanceof Point3D) {
        types.push("Point3D");
    }
    if (p instanceof Point) {
        types.push("Point");
    }
    console.log("My types:", types);
}
myTypes(p1);
myTypes(p3d_1);
