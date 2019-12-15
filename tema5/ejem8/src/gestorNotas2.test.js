const DBAlumnos = require('./bDAlumnos');
const GestorNotas = require('./gestorNotas');

jest.mock('./bDAlumnos');

test('Cálculo nota media', () => {

    DBAlumnos.mockImplementation(() =>
        ({ getNotasAlumno: jest.fn().mockReturnValue([5, 6, 8, 9]) })
    );

    let gestorNotas = new GestorNotas();
    let gestorNotas2 = new GestorNotas();

    expect(gestorNotas.calculaNotaMedia(1)).toBeCloseTo(7);

    expect(DBAlumnos.mock.results[0].value.getNotasAlumno).toBeCalledWith(1);
    expect(DBAlumnos.mock.results[1].value.getNotasAlumno).not.toBeCalled();

});