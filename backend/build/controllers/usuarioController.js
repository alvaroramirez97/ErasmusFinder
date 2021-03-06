"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controladorUsuario = void 0;
var database_1 = __importDefault(require("../database"));
var secret_key = 'secretkey';
var jwt = require('jsonwebtoken');
var salt = '$2b$10$tDku1TnjNl/3QjoKKXKcxO';
var bcrypt = require('bcrypt');
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
    }
    UsuarioController.prototype.index = function (req, res) {
    };
    UsuarioController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usuario, expiresIn, accessToken, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        req.body.password = bcrypt.hashSync(req.body.password, salt);
                        return [4 /*yield*/, database_1.default.query('INSERT INTO usuarios SET ?', [req.body])];
                    case 1:
                        usuario = _c.sent();
                        console.log(usuario);
                        if (!(usuario.affectedRows == 0)) return [3 /*break*/, 2];
                        res.send([false]);
                        return [3 /*break*/, 4];
                    case 2:
                        expiresIn = 24 * 60 * 60;
                        accessToken = jwt.sign({ id: req.body.email }, secret_key, { expiresIn: expiresIn });
                        console.log(accessToken);
                        // const fecha: Date = new Date();
                        _b = (_a = console).log;
                        return [4 /*yield*/, database_1.default.query('UPDATE usuarios SET accessToken = ? WHERE email=? AND password=?', [accessToken, req.body.email, req.body.password])];
                    case 3:
                        // const fecha: Date = new Date();
                        _b.apply(_a, [_c.sent()]);
                        res.send([usuario.insertId, accessToken]);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.updateToken = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, database_1.default.query('UPDATE usuarios SET accessToken = ? WHERE email=?', [req.body.accessToken, req.body.email])];
                    case 1:
                        token = _a.sent();
                        console.log('tokeen:', token);
                        if (token.affectedRows == 0) {
                            res.send(false);
                        }
                        else {
                            res.send(true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.updateUbi = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var latitud;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, database_1.default.query('UPDATE usuarios SET last_longitud = ?, last_latitud = ? WHERE id=?', [req.body.last_longitud, req.body.last_latitud, req.body.email])];
                    case 1:
                        latitud = _a.sent();
                        console.log('latitud:', latitud);
                        if (latitud.affectedRows == 0) {
                            res.send(false);
                        }
                        else {
                            res.send(true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.read = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM usuarios', [req.body])];
                    case 1:
                        usuarios = _a.sent();
                        res.json(usuarios);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.readone = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM usuarios WHERE id=?', [req.params.id])];
                    case 1:
                        usuarios = _a.sent();
                        res.json(usuarios);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('0000', req.body);
                        return [4 /*yield*/, database_1.default.query('UPDATE usuarios SET nombre=?, apellidos=?, email=?, idioma=? WHERE id=?', [req.body.nombre, req.body.apellidos, req.body.email, req.body.idioma, req.body.id])];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        if (user.affectedRows == 0) {
                            res.send([false]);
                        }
                        else {
                            res.send([user.insertId]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('DELETE FROM usuarios WHERE id=?', [req.params.id])];
                    case 1:
                        _a.sent();
                        res.json("Usuario Borrado");
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.check = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT id, email FROM usuarios WHERE email=?', [req.params.email])];
                    case 1:
                        user = _a.sent();
                        if (!user[0]) {
                            console.log('USUARIO NO EXISTE');
                            res.send([false]);
                        }
                        else {
                            console.log('USUARIO SI EXISTE');
                            res.send([true, user[0].id]);
                        }
                        console.log(user[0]);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.readLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarios, comparacion, expiresIn, accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM usuarios WHERE email=?', [req.body.email])];
                    case 1:
                        usuarios = _a.sent();
                        comparacion = bcrypt.compareSync(req.body.password, usuarios[0].password);
                        console.log;
                        if (!comparacion) return [3 /*break*/, 3];
                        expiresIn = 24 * 60 * 60;
                        accessToken = jwt.sign({ id: req.body.email }, secret_key, { expiresIn: expiresIn });
                        console.log(accessToken);
                        // const fecha: Date = new Date();
                        return [4 /*yield*/, database_1.default.query('UPDATE usuarios SET accessToken = ? WHERE email=? AND password=?', [accessToken, req.body.email, usuarios[0].password])];
                    case 2:
                        // const fecha: Date = new Date();
                        _a.sent();
                        res.send([accessToken, usuarios[0]]);
                        return [3 /*break*/, 4];
                    case 3:
                        res.send([false]);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsuarioController;
}());
exports.controladorUsuario = new UsuarioController();
/*
COMPROBAR EL TOKEN IGUAL EN BBDD Y EN USUARIO OBTENIDO
*/ 
