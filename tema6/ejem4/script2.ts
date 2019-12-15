export function process(id: number | number[]){

    console.log(id)

    if(typeof id === "number"){
        processId(id);  
    } else {
        processId(id[0]);
    }    

    return id;

}

function processId(id: number){

}

export function process2(param: any){

    let id: any;

    let value = id.ddd() + 4;
    
    id = 3;

    id = "ss";

    //console.log("sss");

    return id;

}

type Id = number | string;

export function process3(id: Id){

    console.log(id)

    if(typeof id === "number"){
        processId(id);
    } else {
        throw new Error("XXXX");
    }    

    return id;
}

type id = string | number;

function findById(id: Id) {

    console.log("Searching: "+id);
}

findById("r4");
findById(45);
findById(true);

function findByIdAux(id: string | number) {

    console.log("Searching: "+id);

    if (typeof id === "number") {
        return;
    }
    id; // type of x is string here
}