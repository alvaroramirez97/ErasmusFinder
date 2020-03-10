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
        this.router.get('/verpaises', mapaController_1.controladorMapa.verPaises);
        this.router.get('/veridiomas', mapaController_1.controladorMapa.cargarIdiomas);
    };
    return IndexRoutes;
}());
var rutasInicio = new IndexRoutes();
exports.default = rutasInicio.router;
