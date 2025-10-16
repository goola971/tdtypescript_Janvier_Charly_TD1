import { Point } from "./point";
import { TroisPoints } from "./troisPoints";

const A = new Point(0, 0);
const B = new Point(2, 0);
const C = new Point(1, Math.sqrt(3));

const triangle = new TroisPoints(A, B, C);

console.log("Alignés ?", triangle.testerAlignement());
console.log("Isocèle ?", triangle.estIsocele());
