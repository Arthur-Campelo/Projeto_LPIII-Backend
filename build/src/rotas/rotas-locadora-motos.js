"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var verificar_token_1 = __importDefault(require("../middlewares/verificar-token"));
var verificar_perfil_locadora_motos_1 = __importDefault(require("../middlewares/verificar-perfil-locadora-motos"));
var servi_os_locadora_motos_1 = __importDefault(require("../servi\u00E7os/servi\u00E7os-locadora-motos"));
var RotasLocadoraMotos = (0, express_1.Router)();
exports.default = RotasLocadoraMotos;
RotasLocadoraMotos.post("/", servi_os_locadora_motos_1.default.cadastrarLocadoraMotos);
RotasLocadoraMotos.get("/:cnpj", verificar_token_1.default, verificar_perfil_locadora_motos_1.default, servi_os_locadora_motos_1.default.buscarLocadoraMotos);
//# sourceMappingURL=rotas-locadora-motos.js.map