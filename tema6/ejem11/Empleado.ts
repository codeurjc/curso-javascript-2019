import { Jefe } from './Jefe';

export 

class Empleado {

    nombre: string;
    salario: number;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }

    incSalario(incremento: number) {
        this.salario += incremento;
    }

    toString() {
        return "N:" + this.nombre + " S:" + this.salario;
    }
}

let empleado = new Empleado("Pepe",800);

empleado.incSalario(200);

console.log(empleado.salario);

let jefe = new Jefe("Juan", 1200, "D22");

console.log(jefe.salario);
console.log(jefe.despacho);


/*
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    incSalario(incremento) {
        this.salario += incremento;
    }
    toString() {
        return "N:" + this.nombre + " S:" + this.salario;
    }
}
*/