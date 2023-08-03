import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";
import { TradeType } from "./tradeType";



@Entity()
export class Trade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    userId: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "date"})
    date: string;

    @Column({type: "int"})
    amount: number;

    @Column({type: "varchar"})
    type: string;

    @Column({type: "int"})
    tradeTypeId: number;
    
    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => TradeType, (tradeType) => tradeType.id)
    tradeType: TradeType;
}
