import {Trade} from "../entity/trade";
import {AppDataSource} from "../data-source";
import {Raw} from "typeorm";


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
}

export default new TradeService();

