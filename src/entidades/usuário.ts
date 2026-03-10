import { BaseEntity, Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn } from "typeorm";
import LocadoraMotos from "./locadoraMotos";
import OrganizadorEventosMotos from "./organizadorEventosMotos";

export enum Perfil { LOCADORA_MOTOS = "locadoraMotos", ORGANIZADOR_EVENTOS_MOTOS = "organizadorEventosMotos" };
export enum Status { PENDENTE = "pendente", ATIVO = "ativo" };
export enum Cores {
    AMARELO = "yellow", ANIL = "indigo", AZUL = "blue", AZUL_PISCINA = "cyan",
    CINZA_ESCURO = "bluegray", LARANJA = "orange", ROSA = "pink", ROXO = "purple", VERDE = "green",
    VERDE_AZULADO = "teal"
};

@Entity()
export default class Usuário extends BaseEntity {

    @PrimaryColumn()
    cnpj: string;
    @Column({ type: "enum", enum: Perfil })
    perfil: Perfil;
    @Column({ type: "enum", enum: Status, default: Status.PENDENTE })
    status: Status;
    @Column()
    nome: string;
    @Column()
    email: string;
    @Column()
    senha: string;
    @Column()
    questão: string;
    @Column()
    resposta: string;
    @Column({ type: "enum", enum: Cores })
    cor_tema: string;

    @OneToOne(() => LocadoraMotos, (locadoraMotos) => locadoraMotos.usuário)
    locadoraMotos: LocadoraMotos;
    @OneToOne(() => OrganizadorEventosMotos, (organizadorEventosMotos) => organizadorEventosMotos.usuário)
    organizadorEventosMotos: OrganizadorEventosMotos;

    @CreateDateColumn()
    data_criação: Date;
}