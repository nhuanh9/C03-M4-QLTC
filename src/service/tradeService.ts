import {Trade} from "../entity/trade";
import {AppDataSource} from "../data-source";
import {Between, Raw} from "typeorm";

class TradeService {
    private Repository;

    constructor() {
        this.Repository = AppDataSource.getRepository(Trade);
    }

    getAll = async () => {
        return await this.Repository.find({
            relations: {
                tradeType: true,
                user: true
            }
        });
    }

    add = async (data) => {
        return await this.Repository.save(data);
    }
    delete = async (id) => {
        return await this.Repository.delete(id);
    }

    update = async (id, data) => {
        return await this.Repository.update(id, data);
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
        await this.Repository.save(trade);
    }
    findTradeToday = async (data) => {
        console.log(data)
        const loadedPosts = await this.Repository.findTradeToday({
            currentDate: Raw((date) => `${date} > :date`),
        })
        console.log(loadedPosts);
        return loadedPosts;
    }
    findAmount = async (amount, date) => {
        return await this.Repository.find({
            where: {
                amount: amount,
                date: date
            }
        })
    }
    findByDate = async (date) => {
        return await this.Repository.find({
            where: {
                date: date
            }
        })
    }
    findByMonth = async (month) => {
        try {
            return await this.Repository.createQueryBuilder('trade')
                .where(`MONTH(trade.date) = :month`, {month})
                .getMany()
        } catch (error) {
            console.error('Error occurred:', error);
        }
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
            return await this.Repository.createQueryBuilder('trade')
              .where(`MONTH(trade.date) = :month`, {month})
              .getMany();
        } catch (err) {
          console.error(err);
          throw new Error('Error retrieving trade data');
        }
      };
}

export default new TradeService();

