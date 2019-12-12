"use strict"

let defaultConfig = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
    prop4: "value4",
    prop5: "value5",
}

function fillDefault(config){

    return { ...defaultConfig, ...config };

}

let configWithDefaults = fillDefault({ prop1: "n1", prop3: "n3"});

console.log(configWithDefaults);