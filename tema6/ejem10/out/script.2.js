{
    function printLabel1(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel1(myObj);
}
//---------------------------------
{
    function printLabel2(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel2(myObj);
}
{
    function printLabel3(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel3(myObj);
    var myObj2 = { size: 10 };
    printLabel3(myObj2);
    printLabel3({ size: 10, label: "Size 10 Object" });
}
{
    function createSquare(config) {
    }
    createSquare({ color: "black" });
    createSquare({ color: "black", width: 20 });
    createSquare({ color: "black", widht: 20 });
    createSquare({ color: "black", width: 20, stroke: 3 });
    createSquare({ color: "black", widht: 20 });
    createSquare({ color: "black", width: 20, stroke: 3 });
    var conf = { color: "black", widht: 20 };
    createSquare(conf);
    var conf2 = { color: "black", width: 20, stroke: 3 };
    createSquare(conf2);
}
{
    function createFigure(config) {
    }
    createFigure({ color: "black" });
    createFigure({ color: "black", width: 20 });
    createFigure({ color: "black", widht: 20 });
    createFigure({ color: "black", width: 20, stroke: 3 });
}
//Functions in interfaces
{
    var search = void 0;
    search = function (source, subString) {
        return true;
    };
}
{
    var search = void 0;
    search = function (source, subString) {
        return true;
    };
    //Inferencia de tipos: source y substring son de tipo 'string'
    search = function (source, subString) {
        return true;
    };
}
{
    var search = void 0;
    search = function (source, subString) {
        return true;
    };
    search.name = "Ok";
}
{
    function area(s) {
        // In the following switch statement, the type of s is narrowed in each case clause
        // according to the value of the discriminant property, thus allowing the other properties
        // of that variant to be accessed without a type assertion.
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "circle": return Math.PI * s.radius * s.radius;
        }
    }
    function perimeter(s) {
        if (s.kind === "square") {
            return 4 * s.size;
        }
        else if (s.kind === "circle") {
            return 2 * Math.PI * s.radius;
        }
        else {
            throw new Error("Unknonw figure");
        }
    }
    var circle = { kind: "circle", radius: 3 };
    area(circle);
    var circle2 = void 0;
    area(circle2);
}
{
    function createCircle(config) { }
    createCircle({ color: "red", radius: 3 });
}
{
    function logColor(s) {
        console.log(s.color);
    }
    var circle = { kind: "circle", color: "red", radius: 3 };
    logColor(circle);
}
//# sourceMappingURL=script.2.js.map