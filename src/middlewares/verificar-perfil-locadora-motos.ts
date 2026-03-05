import { Perfil } from "../entidades/usuário";

export default function verificarPerfilLocadoraMotos(request, response, next) {
    if (request.perfil === Perfil.LOCADORA_MOTOS) return next();
    else return response.status(401).json({ erro: "Acesso não autorizado." });
};