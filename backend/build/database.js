"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = __importDefault(require("promise-mysql"));
var conexion = {
    database: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'erasmus',
        port: 3306
    }
};
var pool = promise_mysql_1.default.createPool(conexion.database);
pool.getConnection().then(function (Connection) {
    pool.releaseConnection(Connection);
    console.log("BD conectada");
});
exports.default = pool;
