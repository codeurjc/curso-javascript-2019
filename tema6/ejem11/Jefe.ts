import {Empleado} from './Empleado';

export class Jefe extends Empleado {

    despacho: string;

    constructor(nombre: string, salario: number, despacho: string) {
        super(nombre, salario);
        this.despacho = despacho;
    }

    getNombre(){
        return this.nombre;
    }

    toString() {
        return super.toString() + " D:" + this.despacho;
    }
}

let jefe = new Jefe("Juan",900, "D112");

console.log(jefe.toString());