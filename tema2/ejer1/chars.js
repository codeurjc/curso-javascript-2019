function chars(...strings){

    let result = [];
    for(let string of strings){
        result = [...result, ...string];
    }

    return result;
}

console.log(chars("Hola","Pepe","Casa"));