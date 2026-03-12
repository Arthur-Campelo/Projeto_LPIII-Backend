import md5 from "md5";
import { getManager } from "typeorm";
import Usuário, { Status } from "../entidades/usuário";
import OrganizadorEventosMotos from '../entidades/organizadorEventosMotos';
import ServiçosUsuário from "./serviços-usuário";

export default class ServiçosOrganizadorEventosMotos {
    constructor() { }

    static async cadastrarOrganizadorEventosMotos(request, response) {
        try {
            const { usuário_info, cidade, tipo, telefone } = request.body;
            const { usuário, token } = await ServiçosUsuário.cadastrarUsuário(usuário_info);
            const entityManager = getManager();

            await entityManager.transaction(async (transactionManager) => {
                await transactionManager.save(usuário);
                const organizadorEventosMotos = OrganizadorEventosMotos.create({ usuário, cidade, tipo, telefone });
                await transactionManager.save(organizadorEventosMotos);
                await transactionManager.update(Usuário, usuário.cnpj, { status: Status.ATIVO });
                return response.json({ status: Status.ATIVO, token });
            });

        } catch (error) { return response.status(500).json({ erro: error }); }
    };

    static async atualizarOrganizadorEventosMotos(request, response) {
        try {
            const { cnpj, cidade, tipo, telefone } = request.body;
            const cnpj_encriptado = md5(cnpj);

            await OrganizadorEventosMotos.update({ usuário: { cnpj: cnpj_encriptado } }, { cidade, tipo, telefone });
            return response.json();

        } catch (error) { return response.status(500).json({ erro: "Erro BD : atualizarOrganizadorEventosMotos" }); }
    };

    static async buscarOrganizadorEventosMotos(request, response) {
        try {
            const cnpj_encriptado = md5(request.params.cnpj);
            const organizadorEventosMotos = await OrganizadorEventosMotos.findOne({
                where: { usuário: cnpj_encriptado },
                relations: ["usuário"]
            });

            if (!organizadorEventosMotos) return response.status(404).json({ erro: "Organizador não encontrado." });

            return response.json({
                nome: organizadorEventosMotos.usuário.nome, email: organizadorEventosMotos.usuário.email,
                cidade: organizadorEventosMotos.cidade, tipo: organizadorEventosMotos.tipo,
                telefone: organizadorEventosMotos.telefone
            });
        } catch (error) { return response.status(500).json({ erro: "Erro BD : buscarOrganizadorEventosMotos" }); }
    };
}