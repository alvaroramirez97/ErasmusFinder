"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioController_1 = require("../controllers/usuarioController");
var UsuarioRoutes = /** @class */ (function () {
    function UsuarioRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UsuarioRoutes.prototype.config = function () {
        this.router.post('/crear', usuarioController_1.controladorUsuario.create);
        this.router.get('/', usuarioController_1.controladorUsuario.read);
        this.router.put('/:id', usuarioController_1.controladorUsuario.update);
        this.router.delete('/:id', usuarioController_1.controladorUsuario.delete);
        this.router.get('/:id', usuarioController_1.controladorUsuario.readone);
        this.router.post('/login', usuarioController_1.controladorUsuario.readLogin);
    };
    return UsuarioRoutes;
}());
var rutasUsuario = new UsuarioRoutes();
exports.default = rutasUsuario.router;
