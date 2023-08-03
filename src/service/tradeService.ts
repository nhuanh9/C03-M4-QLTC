import { Trade } from "../entity/trade";
import {AppDataSource} from "../data-source";
import { Between } from "typeorm";

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
    findByRange = async (minAmount:number, maxAmount:number) => {
         return await this.Repository.find({
            where: {
               amount: Between (minAmount, maxAmount) ,
            }
          });   
      }
    findDate = async (date) => {
        return await this.Repository.find({
            where : {
                date : date
            }
        })
    }
    sortAmount = async (amount) => {
        return await this.Repository.find(
            {
                order: {amount: amount}
        })
    }
}
export default new TradeService();