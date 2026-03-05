"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var servi_os_usu_rio_1 = __importDefault(require("../servi\u00E7os/servi\u00E7os-usu\u00E1rio"));
var RotasUsuário = (0, express_1.Router)();
exports.default = RotasUsuário;
RotasUsuário.post("/login", servi_os_usu_rio_1.default.logarUsuário);
RotasUsuário.post("/verificar-cnpj/:cnpj", servi_os_usu_rio_1.default.verificarCnpjExistente);
//# sourceMappingURL=rotas-usu%C3%A1rio.js.map