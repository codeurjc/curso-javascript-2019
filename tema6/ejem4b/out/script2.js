"use strict";
function process(id) {
    console.log(id);
    if (typeof id === "number") {
        processId(id);
    }
    else {
        processId(id[0]);
    }
    return id;
}
exports.process = process;
function processId(id) {
}
function process2(param) {
    var id;
    var value = id.ddd() + 4;
    id = 3;
    id = "ss";
    //console.log("sss");
    return id;
}
exports.process2 = process2;
function process3(id) {
    console.log(id);
    if (typeof id === "number") {
        processId(id);
    }
    else {
        throw new Error("XXXX");
    }
    return id;
}
exports.process3 = process3;
//# sourceMappingURL=script2.js.map