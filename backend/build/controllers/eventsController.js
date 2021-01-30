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
exports.controladorEventos = void 0;
var database_1 = __importDefault(require("../database"));
var EventsController = /** @class */ (function () {
    function EventsController() {
    }
    EventsController.prototype.index = function (req, res) {
    };
    EventsController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var evento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, database_1.default.query('INSERT INTO datosevento SET ?', [req.body])];
                    case 1:
                        evento = _a.sent();
                        console.log(evento);
                        if (evento.affectedRows == 0) {
                            res.send([false]);
                        }
                        else {
                            res.send([evento.insertId]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsController.prototype.edit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var d, month, day, year, evento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('1111', req.body);
                        d = new Date(req.body.fecha), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                        if (month.length < 2)
                            month = '0' + month;
                        if (day.length < 2)
                            day = '0' + day;
                        req.body.fecha = [year, month, day].join('-');
                        return [4 /*yield*/, database_1.default.query('UPDATE datosevento SET destino=? , descripcion=? , fecha=? , latitud=? , longitud=? WHERE id_evento= ?', [req.body.destino, req.body.descripcion, req.body.fecha, req.body.latitud, req.body.longitud, req.body.id_evento])];
                    case 1:
                        evento = _a.sent();
                        console.log(evento);
                        if (evento.affectedRows == 0) {
                            res.send([false]);
                        }
                        else {
                            res.send([evento.insertId]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsController.prototype.readEventos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM datosevento', [req.body])];
                    case 1:
                        eventos = _a.sent();
                        res.json(eventos);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsController.prototype.readOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var evento, count, people;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM datosevento WHERE id_evento=?', [req.params.id])];
                    case 1:
                        evento = _a.sent();
                        return [4 /*yield*/, database_1.default.query('SELECT COUNT(id_usuario) AS party FROM eventousuario WHERE id_evento=?', [req.params.id])];
                    case 2:
                        count = _a.sent();
                        return [4 /*yield*/, database_1.default.query('SELECT id, nombre, apellidos, email FROM usuarios WHERE id IN (SELECT id_usuario FROM eventousuario WHERE id_evento = ?)', [req.params.id])];
                    case 3:
                        people = _a.sent();
                        evento[0].participantes = count[0].party;
                        evento[0].lista_users = people;
                        res.json(evento);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('DELETE FROM datosevento WHERE id_evento=?', [req.params.id])];
                    case 1:
                        _a.sent();
                        res.json("Evento Borrado");
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsController.prototype.readEventosFiltrado = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM datosevento WHERE destino LIKE "%' + req.params.destino + '%" OR descripcion LIKE "%' + req.params.destino + '%"')];
                    case 1:
                        eventos = _a.sent();
                        res.json(eventos);
                        console.log("EVENTOS: ", eventos);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsController.prototype.apuntarse = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var evento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, database_1.default.query('INSERT INTO eventousuario SET ?', [req.body])];
                    case 1:
                        evento = _a.sent();
                        if (evento.affectedRows == 0) {
                            res.send([false]);
                        }
                        else {
                            res.send([evento.insertId]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return EventsController;
}());
exports.controladorEventos = new EventsController();
