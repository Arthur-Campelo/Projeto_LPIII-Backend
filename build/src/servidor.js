"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var rotas_usu_rio_1 = __importDefault(require("./rotas/rotas-usu\u00E1rio"));
var rotas_locadora_motos_1 = __importDefault(require("./rotas/rotas-locadora-motos"));
var app = (0, express_1.default)();
var PORT = process.env.PORT;
var CORS_ORIGIN = process.env.CORS_ORIGIN;
app.use((0, cors_1.default)({ origin: CORS_ORIGIN }));
app.use(express_1.default.json());
app.use("/usuarios", rotas_usu_rio_1.default);
app.use("/locadora-motos", rotas_locadora_motos_1.default);
app.listen(PORT || 3333);
var conexão = (0, typeorm_1.createConnection)();
exports.default = conexão;
//# sourceMappingURL=servidor.js.map