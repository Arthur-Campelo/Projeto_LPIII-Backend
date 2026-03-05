"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usu_rio_1 = require("../entidades/usu\u00E1rio");
function verificarPerfilLocadoraMotos(request, response, next) {
    if (request.perfil === usu_rio_1.Perfil.LOCADORA_MOTOS)
        return next();
    else
        return response.status(401).json({ erro: "Acesso não autorizado." });
}
exports.default = verificarPerfilLocadoraMotos;
;
//# sourceMappingURL=verificar-perfil-locadora-motos.js.map