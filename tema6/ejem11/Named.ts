
type Id = string | number;

function findById(id: Id){

    console.log("Searching :"+id);
}



type Named = {
    name: string;    
}

class Person {
    name: string;
    age: number;
}

function log(obj: Named){
    console.log(obj.label);
} 

log({ name: "Obj12"});
log(new Person());

class Computer implements Labeled {
    
    id: string;

    get label() {
        return this.id;
    }
}


class Book implements Labeled {
    label: string
}

class Resource implements Labeled {
    //label: string
}

function log2(obj: Labeled){
    console.log(obj.label);
    obj.label = "sss";
}

log({label: "Hola"});

let person = new Person();
log(person);

let book = new Book();
log(book);

log(new Computer());


