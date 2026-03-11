import md5 from "md5";
import { getManager } from "typeorm";
import Usuário, { Status } from "../entidades/usuário";
import LocadoraMotos from "../entidades/locadoraMotos";
import ServiçosUsuário from "./serviços-usuário";

export default class ServiçosLocadoraMotos {
    constructor() { }

    static async cadastrarLocadoraMotos(request, response) {
        try {
            const { usuário_info, classificação, qnt_disponíveis } = request.body;
            const { usuário, token } = await ServiçosUsuário.cadastrarUsuário(usuário_info);
            const entityManager = getManager();
            await entityManager.transaction(async (transactionManager) => {
                await transactionManager.save(usuário);
                const locadoraMotos = LocadoraMotos.create({ usuário, classificação, qnt_disponíveis });
                await transactionManager.save(locadoraMotos);
                await transactionManager.update(Usuário, usuário.cnpj, { status: Status.ATIVO });
                return response.json({ status: Status.ATIVO, token });
            });
        } catch (error) {
            return response.status(500).json({ erro: error });
        }
    };

    static async buscarLocadoraMotos(request, response) {
        try {
            const cnpj_encriptado = md5(request.params.cnpj);
            const locadoraMotos = await LocadoraMotos.findOne({
                where: { usuário: cnpj_encriptado },
                relations: ["usuário"]
            });
            if (!locadoraMotos) return response.status(404).json({ erro: "Locadora de motos não encontrada." });
            return response.json({
                nome: locadoraMotos.usuário.nome, email: locadoraMotos.usuário.email,
                classificação: locadoraMotos.classificação,
                qnt_disponíveis: locadoraMotos.qnt_disponíveis
            });
        } catch (error) { return response.status(500).json({ erro: "Erro BD : buscarLocadoraMotos" }); }
    };

    static async atualizarLocadoraMotos(request, response) {
        try {
            const { cnpj, classificação, qnt_disponíveis } = request.body;
            const cnpj_encriptado = md5(cnpj);

            await LocadoraMotos.update({ usuário: { cnpj: cnpj_encriptado } }, { classificação, qnt_disponíveis });
            return response.json();
        } catch (error) { return response.status(500).json({ erro: "Erro BD : atualizarLocadoraMotos" }); }
    };

};