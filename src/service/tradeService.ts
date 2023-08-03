import { Trade } from "../entity/trade";
import {AppDataSource} from "../data-source";
import { Raw } from "typeorm";


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
    findTradeToday = async (data) =>{
        console.log(data)
        const loadedPosts = await this.Repository.findBy({
            currentDate: Raw((date) => `${date} > :date`, { date: "2020-10-06" }),
        })
        console.log(loadedPosts);
        return loadedPosts;
    }
}
export default new TradeService();