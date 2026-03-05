import { Router } from "express";
import verificarToken from "../middlewares/verificar-token";
import verificarPerfilLocadoraMotos from "../middlewares/verificar-perfil-locadora-motos";
import ServiçosLocadoraMotos from "../serviços/serviço-locadora-motos";

const RotasLocadoraMotos = Router();
export default RotasLocadoraMotos;

RotasLocadoraMotos.post("/", ServiçosLocadoraMotos.cadastrarLocadoraMotos);
RotasLocadoraMotos.get("/:cnpj", verificarToken, verificarPerfilLocadoraMotos, ServiçosLocadoraMotos.buscarLocadoraMotos);