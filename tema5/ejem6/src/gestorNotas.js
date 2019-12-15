module.exports = class GestorNotas {

    constructor(alumnos) {
        this.alumnos = alumnos;
    }

    calculaNotaMedia(idAlumno) {
        let notas = this.alumnos.getNotasAlumno(idAlumno);
        let suma = 0;
        for (let nota of notas) {
            suma += nota;
        }
        return suma / notas.length;
    }
}