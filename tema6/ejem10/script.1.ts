{

    let empleado = {
        nombre: "Pepe",
        salario: 300,
        toString: function() {
            return "N:"+this.nombre + " S:"+this.salario;
        }
    }

    console.log("Empleado: " + empleado);    

}