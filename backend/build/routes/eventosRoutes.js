"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var eventsController_1 = require("../controllers/eventsController");
var EventosRoutes = /** @class */ (function () {
    function EventosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    EventosRoutes.prototype.config = function () {
        this.router.get('/all', eventsController_1.controladorEventos.readEventos);
        this.router.get('/:id', eventsController_1.controladorEventos.readOne);
        this.router.get('/delete/:id', eventsController_1.controladorEventos.delete);
        this.router.get('/buscar/:destino', eventsController_1.controladorEventos.readEventosFiltrado);
        this.router.post('/crear', eventsController_1.controladorEventos.create);
        this.router.post('/editar', eventsController_1.controladorEventos.create);
        this.router.post('/apuntarse', eventsController_1.controladorEventos.apuntarse);
    };
    return EventosRoutes;
}());
var rutasEventos = new EventosRoutes();
exports.default = rutasEventos.router;
