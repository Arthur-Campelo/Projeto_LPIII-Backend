import { Router } from "express";
import ServiçosUsuário from "../serviços/serviços-usuário";
import verificarToken from "../middlewares/verificar-token";
import verificarErroConteúdoToken from "../middlewares/verificar-erro-conteúdo-token";

const RotasUsuário = Router();

RotasUsuário.post("/login", ServiçosUsuário.logarUsuário);
RotasUsuário.post("/verificar-cnpj/:cnpj", ServiçosUsuário.verificarCnpjExistente);
RotasUsuário.patch("/alterar-usuario", verificarToken, ServiçosUsuário.alterarUsuário);
RotasUsuário.delete("/:cnpj", verificarToken, verificarErroConteúdoToken,ServiçosUsuário.removerUsuário);
RotasUsuário.get("/questao/:cnpj", ServiçosUsuário.buscarQuestãoSegurança);
RotasUsuário.post("/verificar-resposta", ServiçosUsuário.verificarRespostaCorreta);

export default RotasUsuário;