//function processResponse(response: string): number {

function process(response: "yes"|"no"|"maybe"): number {

    switch(response){
        case "yes":
            return 1;
        case "no":
            return 0;
        case "maybe":
            return 0.5;
        default:
            throw new Error();
    }
}

console.log(process("yes"));
console.log(process("no"));
console.log(process("meybe"));




