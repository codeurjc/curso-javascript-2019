"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Parent_1 = require('./Parent');
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(elem) {
        _super.call(this, elem);
    }
    return Child;
}(Parent_1.Parent));
exports.Child = Child;
var child = new Child("Hola");
var elem = child.elem;
//# sourceMappingURL=Child.js.map