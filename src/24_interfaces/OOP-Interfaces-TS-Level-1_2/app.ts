import Circle from "./classes/Circle";
import Rectangle from "./classes/Rectangle";

const circle1: Circle = new Circle("circle", "blue", 20);
const circle2: Circle = new Circle("circle", "red", 25);
const circle3: Circle = new Circle("circle", "green", 15);

circle1.draw();
circle2.draw();
circle3.draw();
console.log(circle1._isRound);
const rect1: Rectangle = new Rectangle("Rectangle", "blue", 20, 20);
const rect2: Rectangle = new Rectangle("Rectangle", "red", 25, 15);
const rect3: Rectangle = new Rectangle("Rectangle", "green", 15, 15);

rect1.draw();
rect2.draw();
rect3.draw();
console.log(rect1._isRound);
