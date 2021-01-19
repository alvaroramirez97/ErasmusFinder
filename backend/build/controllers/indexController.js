"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controladorInicio = void 0;
var path = require('path');
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.inicio = function (req, res) {
        res.sendFile(path.join("src/indice.html"));
    };
    return IndexController;
}());
exports.controladorInicio = new IndexController();
