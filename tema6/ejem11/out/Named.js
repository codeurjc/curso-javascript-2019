class Person {
}
class Computer {
    get label() {
        return this.id;
    }
}
class Book {
}
class Resource {
}
function log(obj) {
    console.log(obj.label);
    obj.label = "sss";
}
log({ label: "Hola" });
let person = new Person();
log(person);
let book = new Book();
log(book);
log(new Computer());
//# sourceMappingURL=Named.js.map