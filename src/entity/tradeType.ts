import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TradeType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    userId: number;

    @Column({type: "int"})
    currentMoney: number;

}
