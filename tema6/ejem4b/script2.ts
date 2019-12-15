
function sumRandom(num: number): number {
    return num + Math.random();
}

function sumOne(num: number): number {
    return num + 1;
}



function twoParam(p:number,p2:any): number {
    return Math.random();
}

function randomStr(): string {
    return "SS";
}

function random(): number {
    return Math.random();
}

let sumator: (num: number) => number;

sumator = random;

sumator = twoParam;
sumator = randomStr;


sumator(3);

function random3(num: number, p2:string, p3?:boolean): number {
    return Math.random();
}

let sumator2: (num: number, p2:string) => number;

sumator2 = random3;


