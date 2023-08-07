import {TradeType} from "../entity/tradeType";
import {AppDataSource} from "../data-source";
import {Between, Raw} from "typeorm";

class TradeTypeService{
    private Repository;

    constructor() {
        this.Repository = AppDataSource.getRepository(TradeType)
    }

    getAll = async() =>{
        return await this.Repository.find()
    }
    addTradeType = async (tradeType) => {
        await this.Repository.save(tradeType);
    }
    deleteTradeType = async (tradeType) =>{
        return await this.Repository.delete(tradeType)
    }
    updateTradeType = async (id , tradeType) =>{
        return await this.Repository.update(id, tradeType)
    }
    findById = async (id) => {
        return await this.Repository.find({
            where: {
                id
            },
        })
    }
}
export default new TradeTypeService()