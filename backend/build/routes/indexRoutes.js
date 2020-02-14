"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexController_1 = require("../controllers/indexController");
var mapaController_1 = require("../controllers/mapaController");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        this.router.get('/', indexController_1.controladorInicio.inicio);
        this.router.get('/mapa', indexController_1.controladorInicio.mapa);
        this.router.get('/eventos', indexController_1.controladorInicio.eventos);
        this.router.get('/verpaises', mapaController_1.controladorMapa.verPaises);
    };
    return IndexRoutes;
}());
var rutasInicio = new IndexRoutes();
exports.default = rutasInicio.router;
