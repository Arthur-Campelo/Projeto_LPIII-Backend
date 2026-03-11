import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Usuário from "./usuário";
import Locação from "./locação";
export enum Tipo { BENEFICIENTE = "beneficente", LUCRATIVO = "lucrativo", ESPORTIVOS = "esportivo"  };

@Entity()
export default class OrganizadorEventosMotos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: "enum", enum: Tipo })
    tipo: Tipo;
    @Column()
    cidade: string;
    @Column()
    telefone: string;
    @OneToMany(() => Locação, (locação) => locação.organizadorEventosMotos)
    locações: Locação[];
    @OneToOne(() => Usuário, usuário => usuário.organizadorEventosMotos, { onDelete: "CASCADE" })
    @JoinColumn()
    usuário: Usuário;
}