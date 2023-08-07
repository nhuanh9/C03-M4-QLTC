import { Trade } from "../entity/trade";
import {AppDataSource} from "../data-source";
import { Between } from "typeorm";
import { Like } from "typeorm";
import {Request} from "express";

class TradeService {
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(Trade);
    }
    
    async getTraders(req: Request) {
        const { date, name, type } = req.query; // data gui len la date, name, type
        
        const query = this.repository.createQueryBuilder('trade'); // tao query bang trade
        if (date) { // neu co data date gui len
            query.where('date = :date', { date }); // them date vao condition
        }
        if (name) { // neu co name gui len
            query.andWhere('name like :name', { name: `%${name}%` }); // tim kiem gan dung theo name
        }
        console.log(type);
        
        if (type) {
            let tradeType = type === '1' ? 'Revenue' : 'Pay'; // neu type gui len = 1 -> Revenue, nguoc lai type -> Pay
            query.andWhere('type = :tradeType', { tradeType });
        }
        
        return await query.getMany();
    }

    getAll = async () => {
        return await this.repository.find()
    }
    nameTrade = async (name) => {
        return await this.repository.find({
            where : {
                name: Like(`%${name}%`),
            }
        })
    }
    findByType = async (type) => {
        return await this.repository.find({
            where : {
                type :type
            }
        })
    }
    addTrade = async (trade) => {
        await this.repository.save(trade)
    }
    findByRange = async (minAmount:number, maxAmount:number) => {
         return await this.repository.find({
            where: {
               amount: Between (minAmount, maxAmount) ,
            }
          });   
      }
    findDate = async (date,type) => {
        return await this.repository.find({
            where : {
                date : date,
                type : type
            }
        })
    }
    sortAmount = async (amount) => {
        return await this.repository.find(
            {
                order: {amount: amount}
        })
    }
    findMonth = async (month) => {
        try {
          const tradeData = await this.repository.createQueryBuilder('trade')
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