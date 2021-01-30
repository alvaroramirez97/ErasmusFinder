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
        this.router.get('/', usuarioController_1.controladorUsuario.read);
        this.router.get('/:id', usuarioController_1.controladorUsuario.readone);
        this.router.post('/crear', usuarioController_1.controladorUsuario.create);
        this.router.put('/editar', usuarioController_1.controladorUsuario.update);
        this.router.put('/token', usuarioController_1.controladorUsuario.updateToken);
        this.router.put('/ubi', usuarioController_1.controladorUsuario.updateUbi);
        //this.router.put('/:id', controladorUsuario.update);
        this.router.delete('/:id', usuarioController_1.controladorUsuario.delete);
        this.router.post('/login', usuarioController_1.controladorUsuario.readLogin);
        this.router.get('/exist/:email', usuarioController_1.controladorUsuario.check);
    };
    return UsuarioRoutes;
}());
var rutasUsuario = new UsuarioRoutes();
exports.default = rutasUsuario.router;
