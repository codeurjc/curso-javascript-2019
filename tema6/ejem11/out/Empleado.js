"use strict";

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

exports.Empleado = Empleado;
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
//# sourceMappingURL=Empleado.js.map