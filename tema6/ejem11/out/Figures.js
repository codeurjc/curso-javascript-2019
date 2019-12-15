"use strict";
class Figure {
    constructor(color) {
        this.color = color;
    }
}
exports.Figure = Figure;
class Circle extends Figure {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}
exports.Circle = Circle;
class Square extends Figure {
    constructor(color, size) {
        super(color);
        this.size = size;
    }
}
exports.Square = Square;
let figure = new Circle("red", 34);
if (figure instanceof Circle) {
    console.log(figure.radius);
}
else if (figure instanceof Square) {
    console.log(figure.size);
}
//# sourceMappingURL=Figures.js.map