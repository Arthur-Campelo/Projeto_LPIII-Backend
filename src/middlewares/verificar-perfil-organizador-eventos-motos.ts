import { Perfil } from '../entidades/usuário';

export default function verificarPerfilOrganizadoEventosMotos(request, response, next) {
    if (request.perfil === Perfil.ORGANIZADOR_EVENTOS_MOTOS) return next();
    else return response.status(401).json({ erro: "Acesso não autorizado." });
};
