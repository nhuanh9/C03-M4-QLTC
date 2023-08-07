import { Trade } from "../entity/trade";
import {AppDataSource} from "../data-source";
import { Between } from "typeorm";
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
                name: Like(`%${name}%`),
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
    findDate = async (date,type) => {
        return await this.Repository.find({
            where : {
                date : date,
                type : type
            }
        })
    }
    sortAmount = async (amount) => {
        return await this.Repository.find(
            {
                order: {amount: amount}
        })
    }
    findMonth = async (month) => {
        try {
          const tradeData = await this.Repository.createQueryBuilder('trade')
            .where(`MONTH(trade.date) = :month`, { month })
            .getMany();
          return tradeData;
        } catch (err) {
          console.error(err);
          throw new Error('Error retrieving trade data');
        }
      };
}
export default new TradeService();