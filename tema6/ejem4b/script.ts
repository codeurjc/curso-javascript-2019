function f1(): void {
    return 3;
}

//--------------------------------------------

function f2(): number {
    console.log(3);
}

//--------------------------------------------


process(); //Error: Supplied parameters do not match any signature of call target.
process("ss");
process("ss", 33);
process("ss", 33, true); //Error: Supplied parameters do not match any signature of call target.

//------------------------------

function process(param1: string, param2?: number) {
    if(param2 !== undefined){
        console.log(param2);
    }
}

process(); 
process("ss");
process("ss", 33);
process("ss", 33, true); 

//Error: Supplied parameters do not match any signature of call target.
//Error: Supplied parameters do not match any signature of call target.

//------------------------------

function process2(param1: boolean): void
function process2(param1: string, param2: number): void

function process2(param1: string | boolean, param2?: number): void {
    if (typeof param1 == "string") {
        console.log("signature1")
    } else {
        console.log("signature2")
    }
}

process2(true); //Signature 1
process2("ss", 33); //Signature 2
process2(true, 33); //Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
