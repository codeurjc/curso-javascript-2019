let viajesPorOrigen = new Map();
let viajesPorDestino = new Map();
let ciudades = new Set();
let viajes = [];

addViaje({ origen: 'Madrid', destino: 'Sevilla', duracion: 2});
addViaje({ origen: 'Madrid', destino: 'Barcelona', duracion:3  });
addViaje({ origen: 'Londres', destino: 'Barcelona', duracion:3  });
addViaje({ origen: 'Barcelona', destino: 'Londres', duracion: 3 });
addViaje({ origen: 'Nueva York', destino: 'Moscu', duracion: 20 });

function addViaje(viaje){

    viajes.push(viaje);

    ciudades.add(viaje.origen);
    ciudades.add(viaje.destino);

    addViajePorCiudad(viajesPorDestino, viaje, viaje.destino);
    addViajePorCiudad(viajesPorOrigen, viaje, viaje.origen);
}

function addViajePorCiudad(map, viaje, ciudad){
    let v = map.get(ciudad);
    if(!v){
        map.set(ciudad, [viaje]);
    } else {
        v.push(viaje);
    }
}

function getViajesCiudadOrigen(ciudad){
    return viajesPorOrigen.get(ciudad);
}

function getViajesCiudadDestino(ciudad){
    return viajesPorDestino.get(ciudad);
}

function getViajes(){
    return viajes;
}

function getCiudades(){
    return ciudades;
}

exports.getViajesCiudadOrigen = getViajesCiudadOrigen;
exports.getViajesCiudadDestino = getViajesCiudadDestino;
exports.getViajes = getViajes;
exports.getCiudades = getCiudades;