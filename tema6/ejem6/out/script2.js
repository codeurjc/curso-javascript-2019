function processResponse2(response) {
    switch (response) {
        case 0 /* Yes */:
            return 1;
        case 1 /* No */:
            return 0;
        case 2 /* Maybe */:
            return 0.5;
        default:
            throw new Error();
    }
}
console.log(Response[0]); // "Yes"
console.log(1 /* "No" */); // 1
console.log(Response[0 /* Yes */]); //"Yes"
console.log(processResponse2(0 /* Yes */));
console.log(processResponse2(0));
console.log(processResponse2("no"));
console.log(processResponse2(Response.Meybe));
//# sourceMappingURL=script2.js.map