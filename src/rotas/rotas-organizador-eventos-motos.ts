import { Router } from "express";
import verificarToken from "../middlewares/verificar-token";
import verificarPerfilOrganizadoEventosMotos from "../middlewares/verificar-perfil-organizador-eventos-motos";
import ServiçosOrganizadoEventosMotos from "../serviços/serviços-organizador-eventos-motos";

const RotasOrganizadorEventosMotos = Router();

RotasOrganizadorEventosMotos.post("/", ServiçosOrganizadoEventosMotos.cadastrarOrganizadorEventosMotos);
RotasOrganizadorEventosMotos.patch("/", verificarToken, verificarPerfilOrganizadoEventosMotos, ServiçosOrganizadoEventosMotos.atualizarOrganizadorEventosMotos);
RotasOrganizadorEventosMotos.get("/:cnpj", verificarToken, verificarPerfilOrganizadoEventosMotos, ServiçosOrganizadoEventosMotos.buscarOrganizadorEventosMotos);

export default RotasOrganizadorEventosMotos;