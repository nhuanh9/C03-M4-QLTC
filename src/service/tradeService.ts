import { Trade } from "../entity/trade";
import {AppDataSource} from "../data-source";
import { Like } from "typeorm";

class TradeService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(Trade);
    }
    
    getAll = async () => {
        return await this.Repository.find()
    }
    addTrade = async (trade) => {
        await this.Repository.save(trade)
    }
    find = async (id) => {
        return await this.Repository.find({
                relations: {
                    tradeType: true,
                    user: true
                },
                where: id
            }
        )
    }
    updateTrade = async (id, data) => {
        return await this.Repository.updateTrade(id, data)
    }
    showTradeInMonth = async (date) => {
        return await this.Repository.showTradeInMonth({
            relations:{
                tradeType:true,
                user: true
            },
            where: date
        })
    }
    findTradeInDay = async (date) =>{

    }

    ASC = async () => {
         return  await this.Repository.find({
            relations: {
                tradeType: true,
                user: true
            },
            trade:
                {amount: 'ASC'}
        })

    }
}
export default new TradeService();