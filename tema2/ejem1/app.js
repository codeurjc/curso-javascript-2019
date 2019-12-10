class Point2D {
    constructor(x,y){
        this.x = x; this.y = y;
    }
    bar(){ return 3; }
}

var obj1 = new Point2D(0,0);
obj1.a = 0;

var obj2 = { ...obj1 };

console.log(obj2);