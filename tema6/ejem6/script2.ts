//const enum Response {
const enum Response {    
    Yes,
    No,
    Maybe
}

function processResponse2(response: Response): number {

    switch(response){
        case Response.Yes:
            return 1;
        case Response.No:
            return 0;
        case Response.Maybe:
            return 0.5;
        default:
            throw new Error();
    }
}

console.log(Response[0]); // "Yes"
console.log(Response["No"]); // 1
console.log(Response[Response.Yes]); //"Yes"

console.log(processResponse2(Response.Yes));
console.log(processResponse2(0));
console.log(processResponse2("no"));

console.log(processResponse2(Response.Meybe));





