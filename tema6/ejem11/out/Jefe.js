"use strict";
const Empleado_1 = require('./Empleado');

class Jefe extends Empleado {

    constructor(nombre, salario, despacho) {
        super(nombre, salario);
        this.despacho = despacho;
    }

    getNombre() {
        return this.nombre;
    }

    toString() {
        return super.toString() + " D:" + this.despacho;
    }
}

let jefe = new Jefe("Juan", 900, "D112");
console.log(jefe.toString());
//# sourceMappingURL=Jefe.js.map