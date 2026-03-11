import { Router } from "express";
import verificarToken from "../middlewares/verificar-token";
import verificarPerfilLocadoraMotos from "../middlewares/verificar-perfil-locadora-motos";
import ServiçosLocadoraMotos from "../serviços/serviços-locadora-motos";

const RotasLocadoraMotos = Router();

RotasLocadoraMotos.post("/", ServiçosLocadoraMotos.cadastrarLocadoraMotos);
RotasLocadoraMotos.patch("/", verificarToken, verificarPerfilLocadoraMotos,ServiçosLocadoraMotos.atualizarLocadoraMotos);
RotasLocadoraMotos.get("/:cnpj", verificarToken, verificarPerfilLocadoraMotos, ServiçosLocadoraMotos.buscarLocadoraMotos);

export default RotasLocadoraMotos;