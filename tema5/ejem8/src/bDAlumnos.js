module.exports = class BDAlumnos {

    constructor() {
        this.alumnos = new Map()
            .set(0, { nombre: 'juan', notas: [3,4,8,10]})
            .set(1, { nombre: 'pepe', notas: [9,8,8,10]})
            .set(2, { nombre: 'raul', notas: [5,5,6.5,8]})
    }

    getNotasAlumno(idAlumno){
        return this.alumnos.get(idAlumno);
    }

    getOtroMetodo(){
        
    }
}