import { Parent } from './Parent';

export class Child<E> extends Parent<E> {

    constructor(elem: E){
        super(elem);
    }

}

let child = new Child<string>("Hola");
let elem = child.elem;

