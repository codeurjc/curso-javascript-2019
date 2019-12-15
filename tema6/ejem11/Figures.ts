export class Figure {

    readonly color: string;

    constructor(color: string) {
        this.color = color;
    }
}

export class Circle extends Figure {

    readonly radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
}

export class Square extends Figure {

    readonly size: number;

    constructor(color: string, size: number) {
        super(color);
        this.size = size;
    }
}

let figure: Figure = new Circle("red", 34);

if (figure instanceof Circle) {
    console.log(figure.radius);
} else if (figure instanceof Square) {
    console.log(figure.size);
}
