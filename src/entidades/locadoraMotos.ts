import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from
    "typeorm";
import Usuário from "./usuário";
import Motos from "./moto";
export enum Classificação { NÃO_CLASSIFICADO = "não_classificado", REGULAR = "regular", BOA = "boa", EXCELENTE = "excelente" };

@Entity()
export default class LocadoraMotos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: "enum", enum: Classificação })
    classificação: Classificação;
    @Column()
    qnt_disponíveis: number;
    @OneToMany(() => Motos, (motos) => motos.locadoraMotos)
    motos: Motos[];
    @OneToOne(() => Usuário, (usuário) => usuário.locadoraMotos, { onDelete: "CASCADE" })
    @JoinColumn()
    usuário: Usuário;
}