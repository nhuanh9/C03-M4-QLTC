import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Trade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    userId: number;

    @Column({type: "varchar", length: 255})
    nameTrade: string;

    @Column({type: "varchar", length: 255})
    dateTrade: string;

    @Column({type: "int"})
    amount: number;

    @Column({type: "varchar"})
    type: string;

    @Column({type: "int"})
    tradeTypeId: number;
    

    
}
