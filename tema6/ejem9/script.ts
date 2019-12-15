function identity(arg: number): number {
    return arg;
}

function identity2(arg: any): any {
    return arg;
}

function identity3<T>(arg: T): T {
    return arg;
}

let num = identity(3);
let anyValue = identity2(3);
let string = identity3("ssss");