const GestorNotas = require('./gestorNotas');

test('Cálculo nota media',()=>{

    const getNotasAlumno = jest.fn();
    
    getNotasAlumno.mockReturnValue([5, 6, 8, 9]);

    let alumnos = { getNotasAlumno };
    
    let gestorNotas = new GestorNotas(alumnos);

    expect(gestorNotas.calculaNotaMedia(1)).toBeCloseTo(7);

    expect(alumnos.getNotasAlumno).toBeCalledWith(1);

});