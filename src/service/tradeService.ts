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
    nameTrade = async (name) => {
        return await this.Repository.find({
            where : {
                name : name
            }
        })
    }
    findByType = async (type) => {
        return await this.Repository.find({
            where : {
                type :type
            }
        })
    }
    addTrade = async (trade) => {
        await this.Repository.save(trade)
    }
}
export default new TradeService();