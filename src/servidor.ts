import cors from "cors";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import RotasUsuário from "./rotas/rotas-usuário";
import RotasLocadoraMotos from "./rotas/rotas-locadora-motos";
import OrganizadorEventosMotos from "./rotas/rotas-organizador-eventos-motos";

const app = express();
const PORT = process.env.PORT
const CORS_ORIGIN = process.env.CORS_ORIGIN;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use("/usuarios", RotasUsuário);
app.use("/locadora-motos", RotasLocadoraMotos);
app.use("/organizador-eventos-motos", OrganizadorEventosMotos);


app.listen(PORT || 3333);
const conexão = createConnection();
export default conexão;