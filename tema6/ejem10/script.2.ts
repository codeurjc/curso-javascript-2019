{

    function printLabel1(obj: any) {
        console.log(obj.label);
    }

    printLabel1({ size: 10, label: "Size 10" });
    printLabel1({ size: 3, labol: "Size 3" });

}

//---------------------------------


{
    function printLabel2(obj: { label: string }) {
        console.log(obj.label);
    }

    let obj1 = { size: 10, label: "Size 10" };
    printLabel2(obj1);

    printLabel2({ size: 10, label: "Size 10" });

    let obj2 = { size: 3, labol: "Size 3" };
    printLabel2(obj2);

    

}

{

    type Labelled = {
        label: string;
    }

    function printLabel(obj: Labelled) {
        console.log(obj.label);
    }

    printLabel({ label: "Size 10 Object" });

    let myObj2 = { size: 10 };
    printLabel(myObj2);

    printLabel({ size: 10, label: "Size 10 Object" });

    //Como ves, "interface" es más bien la estructura del objeto, no que haya una clase en ningún sitio que implemente nada.


}

{

    type SquareConfig = {
        color: string;
        width?: number;
    }

    function createSquare(config: SquareConfig) {
        console.log();
    }

    createSquare({ color: "black", widht: 20 });
    createSquare({ color: "black", width: 20, stroke: 3 });

    createSquare({ color: "black" });
    createSquare({ color: "black", width: 20 });

    

    createSquare({ color: "black", widht: 20 } as SquareConfig);
    createSquare({ color: "black", width: 20, stroke: 3 } as SquareConfig);

    let conf = { color: "black", widht: 20 }
    createSquare(conf);

    let conf2 = { color: "black", width: 20, stroke: 3 }
    createSquare(conf2);

}

{

    interface FigureConfig {
        color?: string;
        width?: number;
        [propName: string]: any; //Any other property with 'any' type
    }

    function createFigure(config: FigureConfig) {

    }

    createFigure({ color: "black" });
    createFigure({ color: "black", width: 20 });
    createFigure({ color: "black", widht: 20 });
    createFigure({ color: "black", width: 20, stroke: 3 });

}

//Functions in interfaces
{

    //En JavaScript un objeto puede ser una función. Puedes ser "llamable". Por tanto los interfaces también pueden definir cómo debería ser la signatura de esa función.

    type SearchFunction = (source: string, subString: string) => boolean;

    let search: SearchFunction;

    search = function (source: string, subString: string) {
        return true;
    }
}

{

    type SearchFunction = {
        (source: string, subString: string): boolean;
    }

    let search: SearchFunction;

    search = function (source: string, subString: string) {
        return true;
    }

    //Inferencia de tipos: source y substring son de tipo 'string'
    search = function (source, subString) {
        return true;
    }

}

{

    //En librerías como jQuery, el $ es una función (sobrecargada) y un objeto con muchas propiedades.

    type SearchFunction = {
        (source: string, subString: string): boolean;
        name: string;
    }

    let search: SearchFunction;

    search = function (source: string, subString: string) {
        return true;
    } as SearchFunction;

    search.name = "Ok";

}

{

    type Square = {
        kind: "square";
        size: number;
    }

    type Circle = {
        kind: "circle";
        radius: number;
    }

    type Shape = Square | Circle;

    function area(s: Shape) {
        // In the following switch statement, the type of s is narrowed in each case clause
        // according to the value of the discriminant property, thus allowing the other properties
        // of that variant to be accessed without a type assertion.
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "circle": return Math.PI * s.radius * s.radius;
        }
    }

    function perimeter(s: Shape) {
                
        if(s.kind === "square") {
            return 4 * s.size;

        } else if(s.kind === "circle"){
            return 2 * Math.PI * s.radius;

        } else {
            throw new Error("Unknonw figure");
        }
    }

    let circle: Circle = { kind: "circle", radius: 3 }
    area(circle);

    let circle2 = { kind: "circle", radius: 3 }
    area(circle2);

    area({ kind: "circle", radius: 3 });

}


{
    //Interfaces que heredan de otros interfaces
    // Hay veces que es conveniente reutilizar un interfaz "común" para definir varios interfaces.

    interface FigureConfig {
        color: string;
    }

    interface CircleConfig extends FigureConfig {
        radius: number;
    }

    function createCircle(config: CircleConfig) { }

    createCircle({ color: "red", radius: 3 })

}

{

    interface ShapeParent {
        color: string;
    }

    interface Square extends ShapeParent {
        kind: "square";
        size: number;
    }

    interface Circle extends ShapeParent {
        kind: "circle";
        radius: number;
    }

    type Shape = Square | Circle;

    function logColor(s: Shape) {
        console.log(s.color);        
    }

    let circle: Circle = {kind: "circle", color: "red", radius: 3};
    logColor(circle)
}
