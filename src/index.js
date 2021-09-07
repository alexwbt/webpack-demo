import Object from "./object";
import Circle from "./shape/Circle";
import "./styles/main.css";
import { magnitude } from "./util/math";

const circle = new Circle();
const object = new Object(0, 0, circle);
const object2 = new Object(0, 0, circle);

console.log(magnitude(12, 20), object, object2);

