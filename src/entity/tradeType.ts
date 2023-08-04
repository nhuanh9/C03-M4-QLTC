import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TradeType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;
}
