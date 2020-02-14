"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.inicio = function (req, res) {
        res.send("Página de Inicio");
    };
    IndexController.prototype.mapa = function (req, res) {
        res.send("Página de Mapa");
    };
    IndexController.prototype.eventos = function (req, res) {
        res.send("Página de Eventos");
    };
    return IndexController;
}());
exports.controladorInicio = new IndexController();
