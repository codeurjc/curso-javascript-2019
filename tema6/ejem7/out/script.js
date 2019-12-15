//function processResponse(response: string): number {
function processResponse(response) {
    switch (response) {
        case "yes":
            return 1;
        case "no":
            return 0;
        case "maybe":
            return 0.5;
        default:
            throw new Error();
    }
}
// "yes" | "no" | "maybe";
console.log(processResponse("yes"));
console.log(processResponse("no"));
console.log(processResponse("meybe"));
//# sourceMappingURL=script.js.map