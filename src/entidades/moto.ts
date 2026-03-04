import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import LocadoraMotos from "./locadoraMoto";
import Locação from "./locação";
export enum Cor {
    AMARELO = "yellow", AZUL = "blue", CINZA_ESCURO = "bluegray", LARANJA = "orange", ROSA = "pink", ROXO = "purple", VERDE = "green",
    VERDE_AZULADO = "teal"
};

@Entity()
export default class Motos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    marca: string;
    @Column()
    modelo: string;
    @Column()
    ano: number;
    @Column()
    usado: boolean;
    @Column()
    dias_manutenção: number;
    @Column({ type: "enum", enum: Cor })
    cor: Cor;
    @ManyToOne(() => LocadoraMotos, (locadoraMotos) => locadoraMotos.motos, { onDelete: "CASCADE" })
    locadoraMotos: LocadoraMotos;
    @OneToMany(() => Locação, (locação) => locação.moto)
    locações: Locação[];
}