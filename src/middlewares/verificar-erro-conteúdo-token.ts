import md5 from "md5";
import Usuário from "../entidades/usuário";

export default async function verificarErroConteúdoToken(request, response, next) {
    const cnpj_encriptado = md5(request.params.cnpj || request.body.cnpj);
    const usuário_token  = await Usuário.findOne({ where: { email: request.email_token } });
    const usuário = await Usuário.findOne({ where: { cnpj: cnpj_encriptado } });

    if (!usuário_token) return response.status(401).json("Token inválido.");
    if (!usuário) return response.status(404).json("Usuário não encontrado.");
    if (usuário_token.email !== usuário.email) return response.status(401).json
        ("Acesso não autorizado.");
    next();
}
