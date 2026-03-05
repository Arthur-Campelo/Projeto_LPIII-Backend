import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import OrganizadorEventosMotos from "./organizadorEventosMotos";
import Moto from "./moto";
export enum Status { PENDENTE = "Pendente", CONFIRMADA = "Confirmada", ATIVA = "Ativa", CONCLUÍDA = "Concluída", CANCELADA = "Cancelada" };

@Entity()
export default class Locação extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "enum", enum: Status })
    status: Status;
    @Column()
    valor_diária: number;
    @Column()
    data_saída: Date;
    @Column()
    data_retorno: Date;
    @Column()
    assegurado: Boolean;
    @CreateDateColumn()
    data_manifestação: Date;
    @ManyToOne(() => Moto, (moto) => moto.locações, { onDelete: "CASCADE" })
    moto: Moto;
    @ManyToOne(() => OrganizadorEventosMotos, (organizadorEventosMotos) => organizadorEventosMotos.locações, { onDelete: "CASCADE" })
    organizadorEventosMotos: OrganizadorEventosMotos;
}