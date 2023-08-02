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
    currentMoney = async () => {
        return await this.Repository.find()
    }
}
export default new TradeService();