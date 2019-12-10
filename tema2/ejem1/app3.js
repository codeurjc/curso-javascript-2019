function myFunction(v, w, x, y, z) {
    console.log(v, w, x, y, z);
}

var args = [0, 1];

myFunction(-1, ...args, 2, ...[3]);