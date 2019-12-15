{

    let empleado = {
        nombre: "Pepe",
        salario: 300
    }

    empleado.nombre = "Juan";

    console.log(empleado.salario);

    empleado.telefono = "34324234";

}

//-----------------------

{

    let empleado: any = {
        nombre: "Pepe",
        salario: 300
    }

    empleado.nombre = "Juan";

    console.log(empleado.salario);

    empleado.telefono = "34324234";

}

//-----------------------

{

    let empleado = {}

    empleado.nombre = "Juan";
    empleado.salario = 300

    console.log(empleado.salario);

    empleado.telefono = "34324234";

}