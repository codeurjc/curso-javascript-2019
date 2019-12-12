let aeropuertos = new Map();

addAeropuerto({ name: "Barajas", ciudad: "Madrid" });
addAeropuerto({ name: "El Prat", ciudad: "Barcelona" })
addAeropuerto({ name: "Manises", ciudad: "Valencia" });

function addAeropuerto(aeropuerto){
    aeropuertos.set(aeropuerto.name, aeropuerto);
}

function getAeropuerto(name){
    return aeropuertos.get(name);
}

exports.getAeropuerto = getAeropuerto;